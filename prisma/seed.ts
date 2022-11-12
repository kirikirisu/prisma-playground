import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 5; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "hoge",
      },
    });
  }

  for (let i = 0; i < 5; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "huga",
      },
    });
  }

  for (let i = 0; i < 5; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "kir",
      },
    });
  }

  for (let i = 0; i < 3; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "hoge",
      },
    });
  }

  for (let i = 0; i < 5; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "pure",
      },
    });
  }

  for (let i = 0; i < 2; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "bob",
      },
    });
  }

  for (let i = 0; i < 2; i++) {
    await prisma.groupbySample.create({
      data: {
        user: "kir",
      },
    });
  }
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
