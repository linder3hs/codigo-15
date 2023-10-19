/* eslint-disable react/prop-types */
export default function TextField({
  value,
  onChange,
  placeholder = "Escribe tu tarea",
  className,
  type = "text",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border w-full px-2 py-3 rounded-l outline-none ${className}`}
      placeholder={placeholder}
    />
  );
}
