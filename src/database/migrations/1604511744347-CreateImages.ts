import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1604511744347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'images',
              columns: [
                {
                  name: 'id',
                  type: 'integer',
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'path',
                  type: 'varchar',
                },
                {
                  name: 'user_id',
                  type: 'integer',
                },
              ],
              foreignKeys: [
                {
                  name: 'ImageUser',
                  columnNames: ['user_id'],
                  referencedTableName: 'user',
                  referencedColumnNames: ['user_id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
