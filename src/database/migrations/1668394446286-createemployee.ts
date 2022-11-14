import { MigrationInterface, QueryRunner } from "typeorm";

export class createemployee1668394446286 implements MigrationInterface {
    name = 'createemployee1668394446286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying NOT NULL, "e_social" character varying NOT NULL, "password" character varying NOT NULL, "field" character varying NOT NULL, "occupation" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
