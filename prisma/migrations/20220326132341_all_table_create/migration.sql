-- AlterTable
ALTER TABLE `todo` MODIFY `title` VARCHAR(40) NULL,
    MODIFY `content` VARCHAR(100) NULL;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(100) NULL,
    `name` VARCHAR(30) NULL,
    `readName` VARCHAR(30) NULL,
    `email` VARCHAR(254) NOT NULL,
    `comment` VARCHAR(1000) NULL,
    `age` INTEGER NULL,
    `prefectureId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Users_prefectureId_key`(`prefectureId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MstPrefectures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prefecture_name` VARCHAR(6) NOT NULL,

    UNIQUE INDEX `MstPrefectures_prefecture_name_key`(`prefecture_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_prefectureId_fkey` FOREIGN KEY (`prefectureId`) REFERENCES `MstPrefectures`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
