import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formdata) => {
    const user = { email: "abc@gmail.com", password: "12345678" };
    const found =
      formdata.email == user.email && formdata.password == user.password;
    if (!found) {
      setError("root.random", {
        message: `User email ${formdata.email} is not a valid email`,
        type: "random",
      });
    }
    console.log(formdata);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border outline-none box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className={`p-2 border outline-none box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-200"
              }  `}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white cursor-pointer w-24 p-1 border rounded-lg bg-purple-400 m-auto">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
