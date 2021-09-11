interface IInputDefaultProps {
  label: string;
  type?: "text" | "email" | "password";
  value: string | number;
  placeholder: string;
  isRequired?: boolean;
  onChangeValue: (value: any) => void;
}

export default function InputDefault(props: IInputDefaultProps) {
  return (
    <div className={`flex flex-col mt-4`}>
      <label htmlFor="">{props.label}</label>
      <input
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white`}
        type={props.type ?? "text"}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChangeValue?.(e.target.value)}
        required={props.isRequired}
      />
    </div>
  );
}
