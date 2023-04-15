export const Input = (props: any) => {
  return (
    <input
      className="glassMorphism p-3 text-center items-center justify-center max-h-8 w-80"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};
