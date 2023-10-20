/* eslint-disable react/prop-types */
import { Button, TextField } from "../../components";

export default function Form({
  handleFormSubmit,
  inputs,
  values,
  handleInputChange,
  errors,
  textButton,
}) {
  return (
    <form onSubmit={handleFormSubmit} className="mb-5 flex flex-col gap-5">
      {inputs.map((input) => (
        <div key={input.name}>
          <TextField
            placeholder={input.placeholder}
            value={values[input.name]}
            name={input.name}
            onChange={handleInputChange}
            type={input.type ?? "text"}
            className="rounded-r"
          />
          <span className="text-red-500 mt-1 text-sm">
            {errors[input.name]}
          </span>
        </div>
      ))}
      <Button
        text={textButton}
        className="rounded-l w-full"
        variant="secondary"
        type="submit"
      />
    </form>
  );
}
