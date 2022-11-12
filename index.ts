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
  const allSamples = await prisma.groupbySample.groupBy({
    by: ["user"],
    _count: { user: true },
  });

  console.log(allSamples);
  // await prisma.groupbySample.deleteMany();
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
