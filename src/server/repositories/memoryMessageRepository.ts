import { Message } from "@/types/message";
import { MessageRepository } from "./messageRepository";

let messages: Message[] = [
  { id: 1, text: "Hello from the mock database 👋" },
  { id: 2, text: "This is an in-memory message" }
];

export const memoryMessageRepository: MessageRepository = {
  async listMessages() {
    return messages;
  },

  async createMessage(text: string) {
    const message: Message = {
      id: Date.now(),
      text
    };

    messages.unshift(message);

    return message;
  }
}
