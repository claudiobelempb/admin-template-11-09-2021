/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface IAvatarProps {
  imagemUrl: string;
}

export default function Avatar(props: IAvatarProps) {
  return (
    <Link href={"/profile"} passHref>
      <div className={`h-10 w-10 ml-4 cursor-pointer`}>
        <img className={`rounded-full`} src={props.imagemUrl} alt="Avatar" />
      </div>
    </Link>
  );
}
