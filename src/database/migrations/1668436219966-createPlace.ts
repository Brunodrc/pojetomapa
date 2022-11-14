import { MigrationInterface, QueryRunner } from "typeorm";

export class createPlace1668436219966 implements MigrationInterface {
    name = 'createPlace1668436219966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "place" ("id" SERIAL NOT NULL, "place_id" character varying NOT NULL, "latitud" character varying NOT NULL, "longitud" character varying NOT NULL, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "place"`);
    }

}
