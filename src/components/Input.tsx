interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}
