import { useForm } from "../../hooks/useForm";
import { Card, Form } from "../../components";
import { inputs } from "./form";
import { create } from "../../services";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";

export default function SignUp() {
  const { errors, values, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      name: "",
      lastname: "",
      email: "",
      password: "",
    });

  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    validateIfValuesHasEmpty();
    const user = await create(values, "users");
    dispatch(saveUser(user));
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
