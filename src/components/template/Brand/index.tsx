import Link from "next/link";

interface IBrandProps {
  title: string;
  isImage?: boolean;
  url: string;
}

export default function Brand(props: IBrandProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
    >
      {props.isImage ? (
        <Link href={props.url} passHref>
          <a>
            <div
              className={`flex flex-col justify-center items-center bg-white rounded-full h-11 w-11`}
            >
              <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`} />
              <div className={`flex mt-1`}>
                <div
                  className={`h-3 w-3 rounded-full bg-yellow-500 mr-0.5`}
                ></div>
                <div
                  className={`h-3 w-3 rounded-full bg-green-600 ml-0.5`}
                ></div>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <Link href={props.url}>
          <a>
            <h1 className={`flex justify-center items-center h-10 w-10`}>
              {props.title}
            </h1>
          </a>
        </Link>
      )}
    </div>
  );
}
