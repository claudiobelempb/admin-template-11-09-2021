interface IButtonDefault {
  onClick: () => void;
  title: string;
  bgColor: string;
  textColor: string;
  hover: string;
  margin?: string;
  padding?: string;
}
export default function ButtonDefault(props: IButtonDefault) {
  return (
    <button
      onClick={props.onClick}
      className={`w-full ${props.bgColor} ${props.hover} ${props.textColor} rounded-lg ${props.padding} ${props.margin}`}
    >
      {props.title}
    </button>
  );
}
