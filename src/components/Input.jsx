export function Input({ label, ...restProps }) {
  return <input className="input" aria-label={label} {...restProps} />;
}
