// components/ui/InputField.tsx
import { Eye, EyeOff } from "@/assets/Icons/icons";
import { FC } from "react";

interface InputFieldProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  isPasswordVisible?: boolean;
  isSignUp?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputField: FC<InputFieldProps> = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  label,
  isPasswordVisible,
  isSignUp,
  togglePasswordVisibility,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          // pattern={
          //   isPasswordVisible && isSignUp
          //     ? "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          //     : undefined
          // }
        />
        {(name === "password" || name === "confirmPassword") && (
          <div onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300 cursor-pointer" />
            ) : (
              <EyeOff className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300 cursor-pointer" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
