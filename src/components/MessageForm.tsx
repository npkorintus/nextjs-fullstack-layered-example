"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./MessageForm.module.css"

export default function MessageForm() {
  const [text, setText] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })

    setText("")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a message..."
      />

      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  )
}
