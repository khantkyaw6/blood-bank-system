import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export function SelectInput({
  register,
  name,
  title,
  options,
  placeholder,
  errors,
  required = true,
}) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1 ml-1">{title}</p>
      <select
        {...register(
          name,
          required ? { required: `${title} is required` } : {}
        )}
        className="input"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors?.[name] && (
        <p className="text-red-500 text-sm ms-2">{errors[name].message}</p>
      )}
    </div>
  );
}

export function TextInput({
  register,
  name,
  placeholder,
  title,
  type = "text",
  errors,
  required = true,
}) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1 ml-1">{title}</p>
      <input
        {...register(
          name,
          required ? { required: `${title} is required` } : {}
        )}
        type={type}
        placeholder={placeholder}
        // defaultValue={placeholder}
        className="input"
        min={type === "number" ? 1 : null}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm ms-2">{errors[name].message}</p>
      )}
    </div>
  );
}

export function PasswordInput({ register, name, title, errors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Track input value
  const inputType = showPassword ? "text" : "password";

  // const togglePassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    const form = document.querySelector("form");
    if (form) {
      const field = form.elements[name];
      if (field && field.value) {
        setInputValue(field.value);
      }
    }
  }, [name]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  return (
    <div className="relative">
      <p className="text-xs text-gray-500 mb-1 ml-1">{title}</p>
      <div className="relative">
        <input
          {...register(name)}
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          className="input"
        />
        {inputValue ? (
          <button
            type="button"
            // onClick={togglePassword}
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)} // optional: handles dragging out
            onTouchStart={() => setShowPassword(true)}
            onTouchEnd={() => setShowPassword(false)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : null}
      </div>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="px-4 py-2 bg-white  hover:bg-gray-100 text-gray-700 rounded-md text-sm shadow-sm transition cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
    </button>
  );
}
