-- CreateTable
CREATE TABLE "Uesr" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "address" TEXT,

    CONSTRAINT "Uesr_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Uesr_email_key" ON "Uesr"("email");
