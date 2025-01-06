"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SignUpFormWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const formMethods = useForm();
  console.log(name);

  return (
    <FormProvider {...formMethods}>
      <form className=" flex flex-col gap-14">{children}</form>
    </FormProvider>
  );
}
