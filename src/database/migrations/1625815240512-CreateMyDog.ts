import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMyDog1625815240512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dogs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "breed",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestap",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestap",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dogs")
    }

}
