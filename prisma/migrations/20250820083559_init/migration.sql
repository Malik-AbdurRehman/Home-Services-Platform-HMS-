-- AlterTable
ALTER TABLE "public"."Request" ALTER COLUMN "requiredExperience" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "status" SET DEFAULT 'new';

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "type" DROP NOT NULL;
