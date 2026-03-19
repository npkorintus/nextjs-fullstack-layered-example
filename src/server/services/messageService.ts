// Service Layer (Business Logic)
//
// Responsibilities:
// - validation
// - business logic
// - calling the data layer

import { getAllMessages, insertMessage } from "@/data/messagesStore";
import { Message } from "@/types/message";
import { prisma } from "@/server/db/prisma";
import { messageRepository } from "@/server/repositories";


// export function listMessages(): Message[] {
//   return getAllMessages();
// }

// export async function listMessages() {
//   return prisma.message.findMany({
//     orderBy: { id: "desc" }
//   });
// }

export async function listMessages() {
  return messageRepository.listMessages();
}

// export function createMessage(text: string): Message {
//   if (!text || text.trim().length === 0) {
//     throw new Error("Message text is required");
//   }

//   return insertMessage(text);
// }

// export async function createMessage(text: string) {
//   if (!text || text.trim().length === 0) {
//     throw new Error("Message text is required");
//   }

//   return prisma.message.create({
//     data: { text }
//   });
// }

export async function createMessage(text: string) {
  if (!text || text.trim().length === 0) {
    throw new Error("Message text is required");
  }

  return messageRepository.createMessage(text);
}
