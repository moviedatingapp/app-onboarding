"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "@/schemas";

export default function SignInFormWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const formMethods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schemas.signInSchema),
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
