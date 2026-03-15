import { Message } from "@/types/message";
import styles from "./MessageList.module.css";

type Props = {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <ul className={styles.list}>
      {messages.map((m) => (
        <li key={m.id} className={styles.message}>
          {m.text}
        </li>
      ))}
    </ul>
  );
}
