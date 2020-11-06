import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class CreateUsersTable1601925154433 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {



        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'user_id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',

                },
                {
                    name: 'user_username',
                    type: 'varchar',
                    isNullable: false

                },
                {
                    name: 'user_name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'user_email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'user_password',
                    type: 'varchar',
                    isNullable: false
                },
                
            ],
            
        }), true)



    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users')


    }

}
