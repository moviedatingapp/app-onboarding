"use client";
import { useFormContext } from "react-hook-form";

export default function TextField({
  inputName,
  inputLabel,
  inputType,
  inputValue,
  placeholder,
}: {
  inputName: string;
  inputLabel: string;
  inputType: string;
  inputValue?: string;
  placeholder: string;
}) {
  const formMethods = useFormContext();

  return (
    <fieldset className=" flex flex-col gap-4">
      <label htmlFor={inputName} className=" text-20 font-normal">
        {inputLabel}
      </label>
      <input
        placeholder={placeholder}
        type={inputType}
        value={inputValue}
        {...formMethods.register(inputName)}
        className=" border w-96 rounded-5 border-light-grey-border placeholder:text-light-grey outline-none px-1 py-2 placeholder:capitalize"
      />
    </fieldset>
  );
}
