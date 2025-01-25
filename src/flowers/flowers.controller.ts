import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/conception/quard'
import { FlowersService } from './flowers.service'

@Controller('flowers')
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	@UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll()
	}
}
