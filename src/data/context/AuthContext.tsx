import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import UserModel from "../../model/UserModel";

interface IAuthContenxt {
  user?: UserModel;
  loading?: boolean;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<IAuthContenxt>({});

async function userNormalize(userFirebase: firebase.User): Promise<UserModel> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    nome: userFirebase.displayName,
    email: userFirebase.email,
    provedor: userFirebase.providerData[0].providerId,
    imagemUrl: userFirebase.photoURL,
    token,
  };
}

function toManageCookie(logged: any) {
  if (logged) {
    Cookies.set("admin-template-surb-auth", logged, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-surb-auth");
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserModel>(null);

  async function sessionConfig(userFirebase: firebase.User) {
    if (userFirebase?.email) {
      const user = await userNormalize(userFirebase);
      setUser(user);
      toManageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      toManageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      sessionConfig(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await sessionConfig(null);
    } finally {
      setLoading(false);
      Router.push("/authenticated");
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-surb-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(sessionConfig);
      return () => cancel();
    } else {
      setLoading(false);
      Router.push("/authenticated");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
