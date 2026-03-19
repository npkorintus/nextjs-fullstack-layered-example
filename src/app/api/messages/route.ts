// API Route (Controller Layer)
//
// Notice how the route is now very thin.

import { NextResponse } from "next/server";
import { listMessages, createMessage } from "@/server/services/messageService";
import { createMessageSchema } from "@/schemas/messageSchema";

export async function GET() {
  const messages = await listMessages();
  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parseResult = createMessageSchema.parse(body);
    const message = createMessage(parseResult.text);

    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
