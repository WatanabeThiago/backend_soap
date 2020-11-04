import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSellTable1604339584352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'sell',
            columns: [
                {
                    name: 'sell_id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'sell_name',
                    type: 'varchar',
                },
                {
                    name: 'sell_price',
                    type: 'integer',
                },
                {
                    name: 'sell_state',
                    type: 'integer',
                    default: 1
                },
                {
                    name: 'sell_description',
                    type: 'varchar',
                },
                {
                    name: "sell_userId",
                    type: 'integer'
                },
                {
                    name: "sell_icon",
                    type: 'varchar'
                },
            ],
            foreignKeys: [
                {
                  name: 'SellUser',
                  columnNames: ['sell_userId'],
                  referencedTableName: 'user',
                  referencedColumnNames: ['user_id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
        }))

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
