import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .test("password", "invalid password format", (value) => {
      return /^(?=.*\d).{8,}$/.test(value);
    }),
});


