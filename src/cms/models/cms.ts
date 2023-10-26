import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity("cms")
export class Cms {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    key: string

    @Column()
    value: string
}
