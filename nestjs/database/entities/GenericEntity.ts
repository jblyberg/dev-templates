import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GenericEntity {
  @PrimaryGeneratedColumn() id: number;

  @PrimaryColumn()
  genericId: string;
}
