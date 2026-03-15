// Data Layer
//
// This simulates a database layer.

import { Message } from "@/types/message";

// let messages: Message[] = [
//   { id: 1, text: "Hello world" },
//   { id: 2, text: "Next.js example" }
// ];

declare global {
  var messagesStore: Message[] | undefined;
}

if (!global.messagesStore) {
  global.messagesStore = [
    { id: 1, text: "Hello world" },
    { id: 2, text: "Next.js example" }
  ];
}

export function getAllMessages(): Message[] {
  // return messages;
  return global.messagesStore!;
}

export function insertMessage(text: string): Message {
  const message = {
    id: Date.now(),
    text
  };

  // messages.push(message);
  global.messagesStore!.push(message);
  return message;
}

console.log("messagesStore loaded");
