/* eslint-disable react/prop-types */

export default function DetailListDescription({ title, list }) {
  const result = list?.map((item) => item.name).join(", ");

  return (
    <p className="text-white text-sm">
      <span className="text-netflix-color-dark">{title}:</span> {result}
    </p>
  );
}
