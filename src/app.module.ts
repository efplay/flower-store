import { Module } from '@nestjs/common'
import { FlowersController } from './flowers/flowers.controller'
import { FlowersModule } from './flowers/flowers.module'
import { FlowersService } from './flowers/flowers.service'

@Module({
	imports: [FlowersModule],
	controllers: [FlowersController],
	providers: [FlowersService],
})
export class AppModule {}
