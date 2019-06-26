import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Event
{
	@PrimaryColumn()
	protected id!: number;

	@Column()
	protected title!: string;

	@Column()
	protected description?: string;

	@Column
	({
		type: 'datetime',
	})
	protected timestamp!: number;

	@Column()
	protected host!: number;

	@Column
	({
		type: 'text',
	})
	protected prizes?: string;

	@Column()
	protected duration!: number;

	@Column()
	protected banner?: string;
}
