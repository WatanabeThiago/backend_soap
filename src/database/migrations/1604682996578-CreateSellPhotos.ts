import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSellPhotos1604682996578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'sell_photos',
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
                  name: 'sell_id',
                  type: 'integer',
                },
              ],
              foreignKeys: [
                {
                  name: 'SellPhoto',
                  columnNames: ['sell_id'],
                  referencedTableName: 'sell',
                  referencedColumnNames: ['sell_id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sell_images');

    }

}
