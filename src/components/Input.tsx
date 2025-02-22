export function Input({
  ...props
}: Readonly<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input
      id={props.name}
      {...props}
      className="bg-gray-600 h-10 rounded p-2 w-full"
    />
  );
}
