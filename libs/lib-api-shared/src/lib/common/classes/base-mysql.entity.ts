import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseMysqlEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;

  @Column({ name: 'is_deleted', nullable: false, default: false }) isDeleted: boolean;
  @Column({ name: 'is_active', nullable: false, default: true }) isActive: boolean;
}
