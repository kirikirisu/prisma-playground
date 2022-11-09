import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const genDaysLaterDate = (days: number): Date => {
  let dt = new Date();

  dt.setDate(dt.getDate() + days);

  return dt;
};

async function main() {
  for (let i = 0; i < 13; i++) {
    await prisma.sample.create({
      data: {
        title: `[created by first roop] not two weeks later ${i}`,
        deadline: genDaysLaterDate(i),
      },
    });
  }

  // create record deadline is two weeks later
  for (let i = 0; i < 3; i++) {
    await prisma.sample.create({
      data: {
        title: `[created by first roop] two weeks later ${i}`,
        deadline: genDaysLaterDate(14),
      },
    });
  }

  for (let i = 20; i < 20; i++) {
    await prisma.sample.create({
      data: {
        title: `[created by second roop] not two weeks later ${i}`,
        deadline: genDaysLaterDate(i),
      },
    });
  }

  for (let i = 0; i < 3; i++) {
    await prisma.sample.create({
      data: {
        title: `[created by second roop] two weeks later ${i}`,
        deadline: genDaysLaterDate(14),
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
