import MessageList from "@/components/MessageList";
import MessageForm from "@/components/MessageForm";
import { getMessages } from "@/lib/api";

export default async function Home() {
  const messages = await getMessages();

  return (
    <main>
      <h1>Messages</h1>

      <MessageList messages={messages} />

      <MessageForm />
    </main>
  );
}
