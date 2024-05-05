import { Module } from '@nestjs/common';
import { ControllerModule } from './application/controllers/controllers.module';

@Module({
  imports: [ControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
