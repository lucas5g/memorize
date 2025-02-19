-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_name_key" ON "Word"("name");
