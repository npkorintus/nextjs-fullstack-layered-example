import { prisma } from "@/server/db/prisma";
import { MessageRepository } from "./messageRepository";

export const prismaMessageRepository: MessageRepository = {
  async listMessages() {
    return prisma.message.findMany({
      orderBy: { id: "desc" }
    });
  },

  async createMessage(text: string) {
    return prisma.message.create({
      data: { text }
    });
  }
}