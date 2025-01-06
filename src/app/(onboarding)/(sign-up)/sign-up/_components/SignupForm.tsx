import React from "react";
import SignUpFormWrapper from "./SignUpFormWrapper";
import TextField from "@/components/InputField";
import SignUpButton from "./SignUpButton";

export default function SignupForm() {
  return (
    <div className="flex justify-center items-center">
      <SignUpFormWrapper>
        <TextField
          placeholder="name"
          inputType="text"
          inputLabel="Name"
          inputName="name"
        />
        <TextField
          placeholder="email"
          inputType="email"
          inputLabel="Email"
          inputName="email"
        />
        <TextField
          placeholder="Username"
          inputType="text"
          inputLabel="Username"
          inputName="userName"
        />
        <div className="flex gap-16">
          <TextField
            placeholder="Password"
            inputType="password"
            inputLabel="Password"
            inputName="password"
          />
          <TextField
            placeholder="Confirm Password"
            inputType="password"
            inputLabel="Confirm Password"
            inputName="confirmPassword"
          />
        </div>
        <div className="w-full items-center justify-center flex">
          {" "}
          <SignUpButton />
        </div>
      </SignUpFormWrapper>
    </div>
  );
}
