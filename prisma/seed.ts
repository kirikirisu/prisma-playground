import { Book, MiddleTable, PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const createRandomUser = (): Omit<User, "id"> => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
});

const createRandomBook = (): Omit<Book, "id"> => ({
  title: faker.animal.cat(),
  author: faker.company.name(),
});

const createMiddleTable = (): Omit<MiddleTable, "id"> => ({
  userId: faker.datatype.number({ min: 1, max: 10 }),
  bookId: faker.datatype.number({ min: 1, max: 10 }),
  description: faker.random.word(),
});

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({ data: createRandomUser() });
  }
  for (let i = 0; i < 10; i++) {
    await prisma.book.create({ data: createRandomBook() });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.middleTable.create({ data: createMiddleTable() });
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
