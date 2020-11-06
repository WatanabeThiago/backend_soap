import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm'
import bcrypt from 'bcryptjs'

import Image from './Image'
import Sell from './Sell'

@Entity('user')
export default class User {

    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column()
    user_email: string;

    @Column()
    user_name: string;

    @Column()
    user_username: string;

    @Column()
    user_password: string;

    @OneToMany(() => Image, (image) => image.user, {
        cascade: ['insert', 'update'],
    })
    images: Image[]



    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }
}

