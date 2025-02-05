import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6 pt-20">
      {children}
    </div>
  );
};

export default AuthLayout;
