"use client";
import React, { ReactNode, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "@/schemas";
import { signUpWithCredentials } from "@/utils/api";

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
  const { watch, setError, clearErrors } = formMethods;
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setError("confirmPassword", {
          message: "Passwords do not match",
        });
      } else {
        clearErrors("confirmPassword");
      }
    }
  }, [password, confirmPassword, setError, clearErrors]);
  const handleSubmit = formMethods.handleSubmit((data) => {
    signUpWithCredentials(data);
  });

  return (
    <FormProvider {...formMethods}>
      <form className=" flex flex-col gap-14" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}
