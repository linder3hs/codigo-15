import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "../../components";
import { create } from "../../services";
import { inputs } from "./form";

export default function SignUp() {
  const { errors, values, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      name: "",
      lastname: "",
      email: "",
      password: "",
    });


  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateIfValuesHasEmpty()) return;
    values.username = values.email;
    
    await create(values, "users");
   
    navigate("/signin");
  };

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <p>Bienvenido a todolist project</p>
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
