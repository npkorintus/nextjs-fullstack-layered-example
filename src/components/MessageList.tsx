import { Message } from "@/types/message";

type Props = {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <ul>
      {messages.map((m) => (
        <li key={m.id}>{m.text}</li>
      ))}
    </ul>
  );
}
