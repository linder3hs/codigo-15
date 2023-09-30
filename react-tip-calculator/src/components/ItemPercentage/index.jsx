/* eslint-disable react/prop-types */
export default function ItemPercentage({ value, isActive }) {
  const bg = isActive ? "bg-green-200" : "bg-primary";

  return (
    <div
      className={`${bg} cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center`}
    >
      <span>{value}</span>
    </div>
  );
}
