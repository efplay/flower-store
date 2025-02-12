import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from 'src/conception/guard'
import { LoggingInterceptor } from 'src/conception/interceptor'
import { FlowersService } from './flowers.service'

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	@UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll()
	}
}
