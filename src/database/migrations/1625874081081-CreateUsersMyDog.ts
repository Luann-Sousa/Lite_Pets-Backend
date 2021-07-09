import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserMyDog1625874081081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usersMyDog",
                columns: [
                {
                    name: "idUsersMydog",
                    type: "uuid"
                },
                {
                     name: "username",
                     type: "varchar"
                 },
                 {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                ],
            }),
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usersMyDog");
    };

}
