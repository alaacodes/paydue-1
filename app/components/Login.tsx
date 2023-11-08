"use client";
import { useLayoutEffect, useState } from "react";
import { BaseModal, modalProps } from "./Modal";
import { Button } from "./Button";
import BrandLogo from "./BrandLogo";
import { Form } from "../components/Form";
import { loginSchema } from "@/validations/index";

export type LoginModalProps = {
  modalState: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const loginFields: string[] = ["email", "password"];

export function Login({ modalState, onClick }: LoginModalProps) {
  function submitForm(data: any) {
    console.log(data);
    onClick(data);
  }
  return (
    <>
      <BaseModal
        onClick={onClick}
        persist={true}
        displayed={modalState}
        width="md:w-[28rem] w-10/12"
      >
        <div className="w-full flex flex-col justify-center items-start">
          <div className="mb-8 w-fit mx-auto">
            <BrandLogo />
          </div>

          <h2 className="text-xl not-italic font-normal leading-[normal] mb-2">
            Login to your Paydue account
          </h2>

          <p className="text-gray-400 text-sm not-italic font-normal leading-6">
            Enter your Credentials below
          </p>

          <Form
            submitForm={(val: any) => submitForm(val)}
            validationSchema={loginSchema}
            fields={loginFields}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            <div className="w-full inline-flex justify-end items-center">
              <Button
                type="button"
                onClick={() => {}}
                className="text-[#1F6BB1] bg-white text-right text-sm not-italic font-normal leading-6"
              >
                Forgot Password?
              </Button>
            </div>
          </Form>
          <p className="w-full mt-1 inline-flex gap-2 justify-center items-center text-right text-sm not-italic font-normal leading-6">
            New here? <button className="text-[#1F6BB1]">Sign up</button>
          </p>
        </div>
      </BaseModal>
    </>
  );
}
