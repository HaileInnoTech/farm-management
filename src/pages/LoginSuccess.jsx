import { useEffect } from "react";

export default function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 2000);
  }, []);

  return (
    <div className="flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Login Successful</h1>
      <h2 className="text-2xl">...Redirecting</h2>
    </div>
  );
}
