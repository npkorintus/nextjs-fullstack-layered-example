// Frontend API Layer

import { Message } from "@/types/message";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getMessages(): Promise<Message[]> {
  const res = await fetch(`${API_URL}/api/messages`);

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  return res.json();
}

export async function createMessage(text: string): Promise<Message> {
  const res = await fetch(`${API_URL}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  if (!res.ok) {
    throw new Error("Failed to create message");
  }

  return res.json();
}
