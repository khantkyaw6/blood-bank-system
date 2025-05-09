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
