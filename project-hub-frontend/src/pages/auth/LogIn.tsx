// components/LogIn.tsx
import { useState } from "react";
import logo from "../../assets/MainLogo.png";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";

const LogIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ loginForme: form });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="w-60 h-20 mr-2 mb-5" src={logo} alt="logo" />

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <InputField
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={handleChange}
                label="Your email"
              />
              <InputField
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                label="Password"
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
              />
              <div className="flex items-center justify-end">
                <a
                  href="#"
                  className="text-sm font-medium  hover:underline underline underline-offset-3 text-gray-900 dark:text-white"
                >
                  Forgot password?
                </a>
              </div>
              <Button type="submit" className="w-full text-center">
                Sign in
              </Button>

              <p className="text-sm font-light text-gray-700 dark:text-gray-200">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
