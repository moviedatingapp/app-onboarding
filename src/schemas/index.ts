import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().nonempty("This is a required field"),
  email: z
    .string()
    .nonempty("This is a required field")
    .email({ message: "Invalid email address" }),
  userName: z.string().nonempty("This is a required field"),
  password: z.string().nonempty("This is a required field").min(8),
  confirmPassword: z.string().nonempty("This is a required field").min(8),
});

export const schemas = { signUpSchema };
