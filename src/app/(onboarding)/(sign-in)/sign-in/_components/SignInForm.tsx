import React from "react";
import SignInFormWrapper from "./SignInFormWrapper";
import TextField from "@/components/InputField";
import SignInButton from "./SignInButton";

export default function SignInForm() {
  return (
    <div className="flex justify-center items-center">
      <SignInFormWrapper>
        <TextField
          placeholder="email/username"
          inputType="email"
          inputLabel="Email or Username"
          inputName="email"
        />

        <TextField
          placeholder="Password"
          inputType="password"
          inputLabel="Password"
          inputName="password"
        />

        <div className="w-full items-center justify-center flex">
          {" "}
          <SignInButton />
        </div>
      </SignInFormWrapper>
    </div>
  );
}
