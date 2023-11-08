import { useLayoutEffect, ReactNode, useRef } from "react";
import { Formik, FormikValues, ErrorMessage } from "formik";
import { loginSchema } from "@/validations/index";
import { Button } from "../components/Button";

export type Form = {
  initialValues?: FormikValues | any;
  validationSchema: typeof loginSchema;
  submitForm: any;
  children?: ReactNode;
  fields: string[];
};

export function Form({
  initialValues,
  validationSchema,
  submitForm,
  children,
  fields,
}: Form) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit }) => (
        <>
          <div className="my-5 w-full">
            <div className="w-full">
              {fields.map((field) => (
                <div className="w-full mb-3">
                  <label className="text-black-100 capitalize text-sm not-italic font-normal leading-6 mb-3">
                    {field}
                  </label>
                  <input
                    className="w-full p-5 h-12 shrink-0 border rounded-lg border-solid border-[#E0E0E0]"
                    type={field}
                    id={field}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage name={field}>
                    {(msg) => (
                      <div className="mt-2 text-xs text-[#EB001B]">{msg}</div>
                    )}
                  </ErrorMessage>
                </div>
              ))}
              {/* //After input */}
              {children}
              <Button
                className={"mt-8 py-2 px-2"}
                onClick={(e: any) => handleSubmit(e)}
                type="submit"
              >
                Login
              </Button>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
}
