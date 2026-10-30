import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div>
      <SignInButton />
      <SignUpButton>
        <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
};

export default Header;
