import { useState } from "react";
import { useForm } from "react-hook-form";
import { bankAdminAuth } from "@/api/bank-dashboard";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await bankAdminAuth(data);
      console.log(res);
      toast.success(res.isSuccess && res?.message);

      localStorage.removeItem("admin");
      localStorage.setItem("bank_admin", res.data.token);
      localStorage.setItem("bank_data", JSON.stringify(res.data.bank));
      navigate("/bank-dashboard");
    } catch (err) {
      const message = err.response.data;
      !message.isSuccess && toast.error(message.error);

      console.error("Failed to Authenticate: ", err);
      console.log(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[380px] p-10 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 shadow-md backdrop-blue-eff"
      >
        <h1 className="text-3xl font-bold text-center mb-10">Bank Login</h1>

        <div className="mb-5">
          <input
            type="email"
            placeholder="Email..."
            {...register("email", { required: "Email is required!" })}
            className="w-full h-10 px-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Password..."
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            className="w-full h-10 px-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-10 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition cursor-pointer mt-5"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
