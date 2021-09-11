/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Image from "next/image";
import ImgLoading from "../../public/images/loading.gif";
import useAuthDada from "../data/hook/useAuthData";

export default function blockedAuthenticated(tsx) {
  const { user, loading } = useAuthDada();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(!document.cookie?.includes("admin-template-surb-auth")){
                window.location.href="/authenticated"
              }
            `,
            }}
          />
        </Head>
        {tsx}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={ImgLoading} alt={"Loading"} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else {
    return renderLoading();
    // return null;
  }
}
