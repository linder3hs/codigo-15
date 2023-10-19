import { Button, Card, TextField } from "../../components";

export default function SignUp() {
  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <form action="" className="mb-5 flex flex-col gap-5">
          <TextField placeholder="Ingrese su nombre" />
          <TextField placeholder="Ingrese su apellido" />
          <TextField placeholder="Ingrese su email" type="email" />
          <TextField placeholder="Ingrese su password" type="password" />
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
