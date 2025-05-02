import { useForm } from "react-hook-form";
import "../style/Form.css";

export default function BankRegisterPage() {
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
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h1 className="form-title">Register</h1>
        {/* Name */}
        <input
          type="text"
          className="form-input"
          placeholder="Name..."
          {...register("name", { required: "Name is required!" })}
        />
        {errors.name && (
          <span className="error-msg">{errors.name.message}</span>
        )}
        {/* Email */}
        <input
          type="email"
          className="form-input"
          placeholder="Email..."
          {...register("email", { required: "Email is required!" })}
        />
        {errors.email && (
          <span className="error-msg">{errors.email.message}</span>
        )}
        {/* Password */}
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
        {/* Confirm-Password */}
        <input
          type="password"
          className="form-input"
          placeholder="Confirm Password..."
          {...register("cpassword", {
            required: "Confirm-Password is required!",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.cpassword && (
          <span className="error-msg">{errors.cpassword.message}</span>
        )}
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
