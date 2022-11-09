import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const genDaysLaterDate = (today: Date, days: number) => {
  today.setDate(today.getDate() + days);
  console.log("gen", today);

  return today;
};

const twoWeeksDate = () => {
  let dt = new Date();

  dt.setDate(dt.getDate() + 14);
  console.log("today", dt);

  return dt;
};

async function main() {
  const allSamples = await prisma.sample.findMany({
    where: {
      deadline: {
        lt: genDaysLaterDate(twoWeeksDate(), 1),
        gt: genDaysLaterDate(twoWeeksDate(), -1),
      },
    },
  });

  console.log(allSamples);
  // await prisma.sample.deleteMany();
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
