import * as z from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["admin", "user", "editor"], {
    required_error: "Please select a role",
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
