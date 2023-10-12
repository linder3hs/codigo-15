/* eslint-disable react/prop-types */
export default function Card({ children, className }) {
  return (
    <div
      className={`border shadow w-[90%] m-auto rounded px-5 py-2 ${className}`}
    >
      {children}
    </div>
  );
}
