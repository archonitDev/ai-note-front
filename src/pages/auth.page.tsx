"use client";

import * as React from "react";
import { AuthTabs } from "../components/Auth/auth-tabs";
import { FormInput } from "../components/Auth/form-input";
import { PasswordInput } from "../components/Auth/password-input";
import { SocialButton } from "../components/Auth/social-button";

export default function AuthPage() {
  const [activeTab, setActiveTab] = React.useState<"login" | "signup">("login");

  return (
    <main className="flex overflow-hidden relative flex-col items-center px-20 pt-7 pb-60 min-h-[900px] max-md:px-5 max-md:pb-24">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/21124f132f0ff91fc6c7865647af81c5c99d67de132f94b5652fdb9921822a2d?placeholderIfAbsent=true"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <section className="flex relative flex-col max-w-full w-[460px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/6df09ec20c950a4ba7313cf8d0b4a852a209079609bcb6d457f343fd23248403?placeholderIfAbsent=true"
          className="object-contain self-center aspect-[3.36] w-[94px]"
          alt="Logo"
        />
        <h1 className="self-center mt-24 text-4xl text-center text-orange-500 max-md:mt-10">
          Welcome to &lt;App Title&gt;
        </h1>

        <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <form className="flex flex-col gap-5 w-full">
          <FormInput
            label="E-mail"
            value="lily.aniston@gmail.com"
            onChange={(value) => console.log(value)}
          />

          <PasswordInput />

          <button
            type="submit"
            className="overflow-hidden gap-2.5 self-stretch px-6 py-6 mt-7 text-sm font-medium text-white bg-slate-400 min-h-[60px] rounded-[40px] max-md:px-5 max-md:mt-10"
          >
            Log In
          </button>
        </form>

        <SocialButton />
      </section>
    </main>
  );
}
