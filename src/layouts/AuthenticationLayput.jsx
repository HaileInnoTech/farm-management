import { useState } from "react";
import ParticalBackground from "../backgrounds/ParticalBackground";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function AuthenticationLayout() {
  const [switchComponent, setSwitchComponent] = useState("Login");

  const navButtons = [
    {
      text: "Login",
      component: Login,
    },
    {
      text: "Sign Up",
      component: SignUp,
    },
  ];

  const helperText = ["Don't have an account?", "Already have an Account?"];
  const buttonText = ["Sign up", "Login"];

  return (
    <>
      <div className="relative z-10">
        <div className="grid h-screen place-items-center ">
          <div className="max-w-sm bg-gray-50 border border-gray-200 rounded-lg shadow">
            <div className="p-5 z-20   ">
              <div className="grid grid-cols-2 mb-4">
                {navButtons.map((button) => (
                  <button
                    className="col-auto flex justify-center text-xl"
                    id={button.text}
                    key={button.text}
                    onClick={() => setSwitchComponent(button.text)}
                    style={
                      button.text === switchComponent
                        ? { color: "#000", borderBottom: "2px solid #000" }
                        : { color: "#9CA3AF" }
                    }
                  >
                    {button.text}
                  </button>
                ))}
              </div>

              {switchComponent === "Login" ? <Login /> : <SignUp />}

              <div className="mt-1 flex justify-center">
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {switchComponent === "Login" ? helperText[0] : helperText[1]}

                  <button
                    className="font-medium pl-2 text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() => {
                      switchComponent === "Sign Up"
                        ? setSwitchComponent("Login")
                        : setSwitchComponent("Sign Up");
                    }}
                  >
                    {switchComponent === "Login"
                      ? buttonText[0]
                      : buttonText[1]}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParticalBackground />
    </>
  );
}

export default AuthenticationLayout;
