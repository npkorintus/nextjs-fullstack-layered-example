// Data Layer
//
// This simulates a database layer.

import { Message } from "@/types/message";

let messages: Message[] = [
  { id: 1, text: "Hello world" },
  { id: 2, text: "Next.js example" }
];

export function getAllMessages(): Message[] {
  return messages;
}

export function insertMessage(text: string): Message {
  const message = {
    id: Date.now(),
    text
  };

  messages.push(message);
  return message;
}
