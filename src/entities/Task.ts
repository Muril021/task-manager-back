import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity('tasks')
export default class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string | number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: true })
    description?: string;

    @Column({
        name: 'is_favorited',
        default: false,
        nullable: false
    })
    is_favorited: boolean;

    @Column({
        type: 'timestamp',
        name: 'created_at',
        nullable: false,
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        name: 'updated_at',
        nullable: false, default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    updated_at: Date;
}