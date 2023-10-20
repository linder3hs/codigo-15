import { useState } from "react";
import { Button, Card, TextField } from "../../components";

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
        <form onSubmit={handleFormSubmit} className="mb-5 flex flex-col gap-5">
          <div>
            <TextField
              placeholder="Ingrese su nombre"
              value={values.name}
              name="name"
              onChange={handleInputChange}
            />
            <span className="text-red-500 mt-1 text-sm">{errors.name}</span>
          </div>
          <div>
            <TextField
              placeholder="Ingrese su apellido"
              value={values.lastname}
              name="lastname"
              onChange={handleInputChange}
            />
            <span className="text-red-500 mt-1 text-sm">{errors.lastname}</span>
          </div>
          <div>
            <TextField
              placeholder="Ingrese su email"
              type="email"
              value={values.email}
              name="email"
              onChange={handleInputChange}
            />
            <span className="text-red-500 mt-1 text-sm">{errors.email}</span>
          </div>
          <div>
            <TextField
              placeholder="Ingrese su password"
              type="password"
              value={values.password}
              name="password"
              onChange={handleInputChange}
            />
            <span className="text-red-500 mt-1 text-sm">{errors.password}</span>
          </div>
          <Button
            text="Crear cuenta"
            className="rounded-l w-full"
            variant="secondary"
            type="submit"
          />
        </form>
      </Card>
    </div>
  );
}
