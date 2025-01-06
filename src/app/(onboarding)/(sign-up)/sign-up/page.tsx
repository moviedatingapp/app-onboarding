import React from "react";
import SignupForm from "./_components/SignupForm";

export default function SignUpPage() {
  return (
    <section className="flex flex-row  items-center justify-center w-screen h-screen">
      <section className=" w-1/2 flex justify-center items-center text-[7rem] bg-blue-secondary text-white-primary h-full">
        Carousel
      </section>
      <section className="w-1/2 h-[80%] mx-20">
        <div className=" flex flex-col justify-center items-start ml-8 h-full">
          <div className="my-10">
            <h1 className=" text-32 font-bold">Create your account</h1>
            <h3 className=" text-20 font-normal">
              Lets get started with 30 days free trail
            </h3>
          </div>

          <SignupForm />
        </div>
      </section>
    </section>
  );
}
