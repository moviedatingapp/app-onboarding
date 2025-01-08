"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "@/schemas";
import axios from "axios";
// import { passwordConfirmationMatch } from "@/app/(onboarding)/_utils";

export default function SignUpFormWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const formMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
    },
    resolver: zodResolver(schemas.signUpSchema),
  });

  // const password = formMethods.watch("password");
  // const confirmPassword = formMethods.watch("confirmPassword");

  // if (passwordConfirmationMatch(password, confirmPassword)) {
  //   formMethods.setError("confirmPassword", {
  //     message: "Passwords do not match",
  //   });
  // } else {
  //   formMethods.clearErrors("confirmPassword");
  // }
  const handleSubmit = formMethods.handleSubmit(async (data) => {
    await axios
      .post("http://localhost:5000/sign-up", {
        name: data.name,
        email: data.email,
        password: data.password,
        userName: data.userName,
        confirmPassword: data.confirmPassword,
      })
      .then((res) => {
        console.log(res);
      });
  });

  return (
    <FormProvider {...formMethods}>
      <form className=" flex flex-col gap-14" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}
