import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Event
{
	@PrimaryColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description?: string;

	@Column
	({
		type: 'datetime',
	})
	timestamp: number;

	@Column()
	host: number;

	@Column
	({
		type: 'text',
	})
	prizes?: string;

	@Column()
	duration: number;

	@Column()
	banner?: string;
}
