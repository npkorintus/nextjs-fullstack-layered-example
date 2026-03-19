import { memoryMessageRepository } from "./memoryMessageRepository";
import { prismaMessageRepository } from "./prismaMessageRepository";

const provider = process.env.DATA_PROVIDER || "memory";

export const messageRepository =
  provider === "prisma"
    ? prismaMessageRepository
    : memoryMessageRepository
;
