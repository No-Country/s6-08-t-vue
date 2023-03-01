import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('donations')
export class Donation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  status: string;

  @Column('float', {
    nullable: false,
  })
  amount: number;

  @Column('text', {
    nullable: false,
    default: 'Usuario Anónimo',
  })
  user: string;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
