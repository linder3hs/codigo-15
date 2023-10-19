import { useState } from "react";
import { Button, Card, TextField } from "../../components";

export default function SignUp() {
  const [values, setValues] = useState({
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

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <form action="" className="mb-5 flex flex-col gap-5">
          <TextField
            placeholder="Ingrese su nombre"
            value={values.name}
            name="name"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Ingrese su apellido"
            value={values.lastname}
            name="lastname"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Ingrese su email"
            type="email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Ingrese su password"
            type="password"
            value={values.password}
            name="password"
            onChange={handleInputChange}
          />
          <Button
            text="Crear cuenta"
            className="rounded-l w-full"
            variant="secondary"
          />
        </form>
      </Card>
    </div>
  );
}
