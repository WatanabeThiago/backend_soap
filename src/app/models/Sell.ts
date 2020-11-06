import {
    Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne,
    JoinColumn
} from 'typeorm'
import SellPhoto from './SellPhoto'
import User from './User';
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

    @OneToMany(() => SellPhoto, (sell_photo) => sell_photo.sell, {
        cascade: ['insert', 'update'],
    })
    sell_photos: SellPhoto[]



}

