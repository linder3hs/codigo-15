/* eslint-disable react/prop-types */
import dollarIcon from "../../assets/icon-dollar.svg";
import personIcon from "../../assets/icon-person.svg";

export default function TextField({ icon, name, placeholder }) {
  const icons = {
    dollar: dollarIcon,
    person: personIcon,
  };

  return (
    <div className="flex items-center p-3 rounded-md bg-green-100/50 cursor-text">
      <img src={icons[icon]} alt="" />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
      />
    </div>
  );
}
