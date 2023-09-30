/* eslint-disable react/prop-types */
import { useRef } from "react";
import dollarIcon from "../../assets/icon-dollar.svg";
import personIcon from "../../assets/icon-person.svg";

export default function TextField({ icon, name, placeholder }) {
  const inputRef = useRef(null);

  const icons = {
    dollar: dollarIcon,
    person: personIcon,
  };

  const handleInputRef = () => inputRef.current.focus();

  return (
    <div
      onClick={handleInputRef}
      className="flex items-center p-3 rounded-md bg-green-100/50 cursor-text"
    >
      <img src={icons[icon]} alt="" />
      <input
        ref={inputRef}
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
      />
    </div>
  );
}
