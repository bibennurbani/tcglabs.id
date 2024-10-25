import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 border-t-blue-500 h-16 w-16 animate-spin"></div>
    </div>
  );
}
