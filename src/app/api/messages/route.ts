// API Route (Controller Layer)
//
// Notice how the route is now very thin.

import { NextResponse } from "next/server";
import { listMessages, createMessage } from "@/services/messageService";

export async function GET() {
  const messages = await listMessages();
  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const message = createMessage(body.text);
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
