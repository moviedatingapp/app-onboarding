"use client";
import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <fieldset className=" flex flex-col gap-4">
      <label htmlFor={inputName} className=" text-20 font-normal">
        {inputLabel}
      </label>
      <div>
        <div className="w-[386px] p-[1px] bg-light-grey-border rounded-5 flex">
          <div className=" flex flex-row w-96 rounded-5 bg-white-primary">
            <input
              placeholder={placeholder}
              type={
                inputType === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : inputType
              }
              value={inputValue}
              {...formMethods.register(inputName)}
              className="  w-96 rounded-5  placeholder:text-light-grey outline-none px-1 py-2 placeholder:capitalize"
            />
            {inputType === "password" && (
              <span
                onClick={handleShowPasswordIcon}
                className="flex items-center justify-center pr-4 cursor-pointer"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </span>
            )}
          </div>
        </div>
        {formMethods?.formState?.errors[inputName]?.message && (
          <p className="text-red-bright">
            *{formMethods?.formState?.errors[inputName]?.message as string}
          </p>
        )}
      </div>
    </fieldset>
  );
}
