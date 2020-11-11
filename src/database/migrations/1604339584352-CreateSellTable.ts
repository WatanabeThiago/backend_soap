import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                    isNullable: true
                },
                {
                    name: "sell_userId",
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: "sell_icon",
                    type: 'varchar'
                },
                {
                    name: "sell_amount",
                    type: 'integer',
                    isNullable: false

                },
                {
                    name: "sell_amountSold",
                    type: 'integer',
                    default: 0
                },
                {
                    name: "sell_AmountAvailable",
                    type: 'integer',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                  },
                
            ],
            foreignKeys: [
                {
                  name: 'SellUser',
                  columnNames: ['user_id'],
                  referencedTableName: 'user',
                  referencedColumnNames: ['user_id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
            
        }), true)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
