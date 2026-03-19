// Message schema using Zod for validation
// This schema defines the structure and validation rules for creating a new message.
// It ensures that the message text is a non-empty string and does not exceed 500 characters.
// This schema can be used in the service layer to validate incoming data before processing it.

import { z } from "zod";

export const createMessageSchema = z.object({
  text: z
    .string()
    .min(1, "Message cannot be empty")
    .max(500, "Message too long")
});

export type CreateMessageInput =
  z.infer<typeof createMessageSchema>;
