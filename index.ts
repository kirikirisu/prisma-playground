import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const middleList = await prisma.middleTable.findMany({
    take: 3,
    where: {
      userId: 9,
      bookId: 5,
    },
    include: {
      user: true,
      book: true,
    },
  });

  console.log("middlelist", middleList);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
