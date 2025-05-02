import { useForm } from "react-hook-form";
import "../style/Form.css";

export default function BankLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h1 className="form-title">Login</h1>
        <input
          type="email"
          className="form-input"
          placeholder="Email..."
          {...register("email", { required: "Email is required!" })}
        />
        {errors.email && (
          <span className="error-msg">{errors.email.message}</span>
        )}
        <input
          type="password"
          className="form-input"
          placeholder="Password..."
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="error-msg">{errors.password.message}</span>
        )}
        <button className="submit-btn">Login</button>
        <span className="register-msg">
          Don't have an account? <a href="/bank/register">Register</a>
        </span>
      </form>
    </div>
  );
}
