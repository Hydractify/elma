import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Poll
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
	protected host!: string;         // host's discord id

	@Column
	({
		type: 'text',
	})
	/* eslint-disable @typescript-eslint/no-explicit-any */
	protected prizes?: Record<string, any>;
}
