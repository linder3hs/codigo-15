import { Card, Form } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { showError } from "../../utils";
import { create } from "../../services";

export default function SignIn() {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      email: "",
      password: "",
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateIfValuesHasEmpty()) return;

    const { data, ok } = await create(values, "login");

    if (!ok) {
      showError(data);
      return;
    }

    dispatch(saveUser(data));
    navigate("/");
  };

  return (
    <>
      <div className="h-screen flex items-center pl-20  bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cover">
        <Card className="max-w-md mx-0">
          <h1 className="text-3xl mt-5 mb-3">Login</h1>
          <p className="mb-5">Welcome back! Inicia sesión</p>
          <Form
            inputs={inputs}
            values={values}
            errors={errors}
            textButton="Iniciar Sesión"
            handleFormSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </Card>
      </div>
    </>
  );
}
