import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { LoggerMiddleware } from './conception/middleware'
import { FlowersController } from './flowers/flowers.controller'
import { FlowersModule } from './flowers/flowers.module'
import { FlowersService } from './flowers/flowers.service'

@Module({
	imports: [FlowersModule],
	controllers: [FlowersController],
	providers: [FlowersService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('flowers')
	}
}
