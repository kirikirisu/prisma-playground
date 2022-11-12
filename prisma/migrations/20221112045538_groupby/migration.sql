/*
  Warnings:

  - You are about to drop the `OrderbySample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OrderbySample";

-- CreateTable
CREATE TABLE "GroupbySample" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "GroupbySample_pkey" PRIMARY KEY ("id")
);
