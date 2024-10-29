-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "summary" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "inScope" TEXT[],
    "outScope" TEXT[],
    "rewards" TEXT[],
    "tag" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);
