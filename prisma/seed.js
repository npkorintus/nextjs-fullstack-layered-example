import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany();

  await prisma.message.createMany({
    data: [
      { text: "Hello from the database 👋" },
      { text: "This message was seeded with Prisma" },
      { text: "Next.js App Router + Prisma example" }
    ]
  });

  console.log("Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
