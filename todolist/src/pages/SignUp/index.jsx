import { useState } from "react";
import { Card, Form } from "../../components";
import { inputs } from "./form";

export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateIfValuesHasEmpty = () => {
    const empties = Object.keys(values)
      .filter((value) => !values[value])
      .map((value) => [value, "Este campo es requerido"]);

    if (empties.length === 0) {
      setErrors({});
      return;
    }

    setErrors(Object.fromEntries(empties));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateIfValuesHasEmpty();
  };

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <Form
          inputs={inputs}
          errors={errors}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          textButton="Crear cuenta"
          values={values}
        />
      </Card>
    </div>
  );
}
