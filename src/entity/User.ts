import { Entity, Column } from 'typeorm';

@Entity()
export class User
{
	@Column
	({
		type: 'datetime',
	})
	protected timezone!: number;
}
