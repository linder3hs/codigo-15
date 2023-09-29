/* eslint-disable react/prop-types */
export default function ItemPercentage({ value }) {
  return (
    <div className="bg-primary cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center">
      <span>{value}</span>
    </div>
  );
}
