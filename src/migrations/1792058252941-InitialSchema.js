/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export class InitialSchema1792058252941 {
    name = 'InitialSchema1792058252941'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(20) NOT NULL, \`password_hash\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(200) NOT NULL, \`city\` varchar(50) NOT NULL, \`state\` varchar(50) NOT NULL, \`country\` varchar(50) NOT NULL, \`pincode\` varchar(10) NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`parentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brands\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, UNIQUE INDEX \`IDX_96db6bbbaa6f23cad26871339b\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart_items\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`productVariantId\` int NOT NULL, \`cartId\` int NOT NULL, UNIQUE INDEX \`UQ_cart_product_variant\` (\`cartId\`, \`productVariantId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`carts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, UNIQUE INDEX \`REL_69828a178f152f157dcf2f70a8\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image_url\` text NOT NULL, \`productId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, \`brandId\` int NOT NULL, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_variants\` (\`id\` int NOT NULL AUTO_INCREMENT, \`sku\` varchar(50) NOT NULL, \`size\` varchar(10) NOT NULL, \`color\` varchar(50) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`stock\` int NOT NULL, \`productId\` int NOT NULL, UNIQUE INDEX \`IDX_032eff13089775e8df1eb06b54\` (\`sku\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`wishlist_items\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productId\` int NOT NULL, \`wishlistId\` int NOT NULL, UNIQUE INDEX \`UQ_wishlist_product\` (\`wishlistId\`, \`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`wishlists\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, UNIQUE INDEX \`REL_4f3c30555daa6ab0b70a1db772\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_d25f1ea79e282cc8a42bd616aa3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD CONSTRAINT \`FK_9a6f051e66982b5f0318981bcaa\` FOREIGN KEY (\`parentId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart_items\` ADD CONSTRAINT \`FK_98ba4bbf6e3611d2062b898f5c1\` FOREIGN KEY (\`productVariantId\`) REFERENCES \`products_variants\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart_items\` ADD CONSTRAINT \`FK_edd714311619a5ad09525045838\` FOREIGN KEY (\`cartId\`) REFERENCES \`carts\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carts\` ADD CONSTRAINT \`FK_69828a178f152f157dcf2f70a89\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_images\` ADD CONSTRAINT \`FK_b367708bf720c8dd62fc6833161\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ea86d0c514c4ecbb5694cbf57df\` FOREIGN KEY (\`brandId\`) REFERENCES \`brands\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products_variants\` ADD CONSTRAINT \`FK_8351982655b7e3ef1d6da6acbd3\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wishlist_items\` ADD CONSTRAINT \`FK_485ece8ab9b569d1c560144aa25\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wishlist_items\` ADD CONSTRAINT \`FK_afee7b38d9a4d8e1039e3a0de49\` FOREIGN KEY (\`wishlistId\`) REFERENCES \`wishlists\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wishlists\` ADD CONSTRAINT \`FK_4f3c30555daa6ab0b70a1db772c\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`wishlists\` DROP FOREIGN KEY \`FK_4f3c30555daa6ab0b70a1db772c\``);
        await queryRunner.query(`ALTER TABLE \`wishlist_items\` DROP FOREIGN KEY \`FK_afee7b38d9a4d8e1039e3a0de49\``);
        await queryRunner.query(`ALTER TABLE \`wishlist_items\` DROP FOREIGN KEY \`FK_485ece8ab9b569d1c560144aa25\``);
        await queryRunner.query(`ALTER TABLE \`products_variants\` DROP FOREIGN KEY \`FK_8351982655b7e3ef1d6da6acbd3\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ea86d0c514c4ecbb5694cbf57df\``);
        await queryRunner.query(`ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_b367708bf720c8dd62fc6833161\``);
        await queryRunner.query(`ALTER TABLE \`carts\` DROP FOREIGN KEY \`FK_69828a178f152f157dcf2f70a89\``);
        await queryRunner.query(`ALTER TABLE \`cart_items\` DROP FOREIGN KEY \`FK_edd714311619a5ad09525045838\``);
        await queryRunner.query(`ALTER TABLE \`cart_items\` DROP FOREIGN KEY \`FK_98ba4bbf6e3611d2062b898f5c1\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_9a6f051e66982b5f0318981bcaa\``);
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_d25f1ea79e282cc8a42bd616aa3\``);
        await queryRunner.query(`DROP INDEX \`REL_4f3c30555daa6ab0b70a1db772\` ON \`wishlists\``);
        await queryRunner.query(`DROP TABLE \`wishlists\``);
        await queryRunner.query(`DROP INDEX \`UQ_wishlist_product\` ON \`wishlist_items\``);
        await queryRunner.query(`DROP TABLE \`wishlist_items\``);
        await queryRunner.query(`DROP INDEX \`IDX_032eff13089775e8df1eb06b54\` ON \`products_variants\``);
        await queryRunner.query(`DROP TABLE \`products_variants\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP TABLE \`product_images\``);
        await queryRunner.query(`DROP INDEX \`REL_69828a178f152f157dcf2f70a8\` ON \`carts\``);
        await queryRunner.query(`DROP TABLE \`carts\``);
        await queryRunner.query(`DROP INDEX \`UQ_cart_product_variant\` ON \`cart_items\``);
        await queryRunner.query(`DROP TABLE \`cart_items\``);
        await queryRunner.query(`DROP INDEX \`IDX_96db6bbbaa6f23cad26871339b\` ON \`brands\``);
        await queryRunner.query(`DROP TABLE \`brands\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP TABLE \`address\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
