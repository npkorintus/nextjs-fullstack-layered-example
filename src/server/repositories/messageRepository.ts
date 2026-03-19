// Repository Interface
// Defines the contract

import { Message } from "@/types/message";

export interface MessageRepository {
  listMessages(): Promise<Message[]>;
  createMessage(text: string): Promise<Message>;
}
