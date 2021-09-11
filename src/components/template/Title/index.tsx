interface ITitleProps {
  title: string;
  sub_title: string;
}
export default function Title(props: ITitleProps) {
  return (
    <div
      className={`
     
    `}
    >
      <h1
        className={`
        font-black
        text-3xl
        text-gray-900
        dark:text-gray-100
        `}
      >
        {props.title}
      </h1>
      <h2
        className={`
        font-light
        text-sm
        text-gray-600
        dark:text-gray-200
      `}
      >
        {props.sub_title}
      </h2>
    </div>
  );
}
