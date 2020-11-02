import {
    Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne,
    JoinColumn
} from 'typeorm'

import User from './User'


@Entity('sells')
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

    @ManyToOne(() => User, (user) => user.sell)
    @JoinColumn({ name: 'userId' })
    user: User;

}

