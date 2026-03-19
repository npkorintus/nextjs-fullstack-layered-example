import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { listMessages } from "@/services/messageService";
import styles from "./page.module.css";

export default async function Home() {
  const messages = await listMessages();

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Messages</h1>

        <MessageList messages={messages} />

        <div className={styles.section}>
          <MessageForm />
        </div>
      </div>
    </main>
  );
}
