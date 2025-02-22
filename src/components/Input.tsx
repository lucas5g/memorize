interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ ...props }: Readonly<Props>) {
  return (
      <input
        id={props.name}
        {...props}
        className="bg-gray-600 h-10 rounded p-2 w-full"
      />
  );
}
