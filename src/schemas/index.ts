import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().nonempty("This is a required field"),
  email: z
    .string()
    .nonempty("This is a required field")
    .email({ message: "Invalid email" }),
  userName: z.string().nonempty("This is a required field"),
  password: z
    .string()
    .nonempty("This is a required field")
    .min(8, "Password should be at least 8 characters long"),
  confirmPassword: z
    .string()
    .nonempty("This is a required field")
    .min(8, "Password should be at least 8 characters long"),
});

export const schemas = { signUpSchema };
