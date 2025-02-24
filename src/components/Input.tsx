export function Input({
  ...props
}: Readonly<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input
      id={props.name}
      {...props}
      className='bg-gray-800 h-12 rounded p-3 w-full focus:outline-none focus:border hover:border '
    />
  );
}
