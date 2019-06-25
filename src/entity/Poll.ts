import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Poll
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
	host: string;         // host's discord id

	@Column
	({
		type: 'text',
	})
	prizes?: Object;
}
