interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label,  ...props }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="hover:cursor-pointer">{label}</label>
      <input 
        id={props.name}
        {...props}
        className="bg-gray-600 p-2 rounded"
       />
    </div>
  );
}
