import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class FlowersService {
	constructor(private readonly prisma: PrismaService) {}
	findAll() {
		return this.prisma.flower.findMany()
		// return [
		// 	{
		// 		name: 'Rose',
		// 		color: '#red',
		// 		price: 5,
		// 	},
		// 	{
		// 		name: 'Lily',
		// 		color: '#white',
		// 		price: 6,
		// 	},
		// 	{
		// 		name: 'Tulip',
		// 		color: '#Yellow',
		// 		price: 7,
		// 	},
		// ]
	}
}
