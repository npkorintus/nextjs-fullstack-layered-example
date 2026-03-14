// Service Layer (Business Logic)
//
// Responsibilities:
// - validation
// - business logic
// - calling the data layer

import { getAllMessages, insertMessage } from "@/data/messagesStore";
import { Message } from "@/types/message";

export function listMessages(): Message[] {
  return getAllMessages();
}

export function createMessage(text: string): Message {
  if (!text || text.trim().length === 0) {
    throw new Error("Message text is required");
  }

  return insertMessage(text);
}
