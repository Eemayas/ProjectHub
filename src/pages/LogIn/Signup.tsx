// components/LogIn.tsx
import { useState } from "react";
import logo from "../../assets/MainLogo.png";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    gitlink: "",
    gender: "",
    dob: "", // Changed to an empty string
    phonenumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ SignupForm: formData });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="w-60 h-20 mr-2 mb-5" src={logo} alt="logo" />

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <InputField
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
              />
              <InputField
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
              />
              <InputField
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
                isSignUp={true} // or false depending on the context
              />
              <InputField
                type={isPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                isPasswordVisible={isConfirmPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                isSignUp={true}
              />
              <InputField
                type="url"
                name="gitlink"
                id="gitlink"
                placeholder="Enter your GitHub link"
                value={formData.gitlink}
                onChange={handleChange}
                label="GitHub Link"
              />
              <InputField
                type="tel"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter your phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                label="Phone Number"
              />
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <InputField
                type="date"
                name="dob"
                id="dob"
                placeholder="Enter your date of birth"
                value={formData.dob}
                onChange={handleChange}
                label="Date of Birth"
              />

              <Button type="submit" className="w-full text-center">
                Sign Up
              </Button>

              <p className="text-sm font-light text-gray-700 dark:text-gray-200">
                Already have an account?{" "}
                <a
                  href="./login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
