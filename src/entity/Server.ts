import { Entity, Column } from 'typeorm';

@Entity()
export class Server
{
	@Column()
	eventRoles: string;
}
