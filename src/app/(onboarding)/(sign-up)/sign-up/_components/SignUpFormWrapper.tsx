"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "@/schemas";

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

  return (
    <FormProvider {...formMethods}>
      <form
        className=" flex flex-col gap-14"
        onSubmit={formMethods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
}
