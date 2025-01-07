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
  console.log();

  return (
    <fieldset className=" flex flex-col gap-4">
      <label htmlFor={inputName} className=" text-20 font-normal">
        {inputLabel}
      </label>
      <div className="w-[386px] p-[1px] bg-light-grey-border rounded-5 flex">
        <input
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          {...formMethods.register(inputName)}
          className="  w-96 rounded-5  placeholder:text-light-grey outline-none px-1 py-2 placeholder:capitalize"
        />
        {formMethods?.formState?.errors[inputName]?.message && (
          <p className="text-red-bright">
            *{formMethods?.formState?.errors[inputName]?.message as string}
          </p>
        )}
      </div>
    </fieldset>
  );
}
