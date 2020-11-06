import {
    Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne,
    JoinColumn
} from 'typeorm'

@Entity('sell')
export default class Sell {

    @PrimaryGeneratedColumn('increment')
    sell_id: number;

    @Column()
    sell_name: string;

    @Column()
    sell_price: number;

    @Column()
    sell_state: number;

    @Column()
    sell_description: string;

    @Column()
    sell_icon: string;
    
    @Column()
    sell_amount: number;
    
    @Column()
    sell_amountSold: number;
    
    @Column()
    sell_AmountAvailable: number;

    @Column()
    sell_userId: string;

   
    
}

