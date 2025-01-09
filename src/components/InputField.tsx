"use client";
import Image from "next/image";
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
                  <Image
                    src={"/icons/eye-off.svg"}
                    alt="show-password"
                    height={24}
                    width={24}
                  />
                ) : (
                  <Image
                    src={"/icons/eye.svg"}
                    alt="show-password"
                    height={24}
                    width={24}
                  />
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
