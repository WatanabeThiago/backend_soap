import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import Sell from './Sell';
  
  @Entity('sell_photos')
  export default class SellPhoto {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    path: string;
  
    @ManyToOne(() => Sell, (sell) => sell.sell_photos)
    @JoinColumn({ name: 'sell_id' })
    sell: Sell;
  }