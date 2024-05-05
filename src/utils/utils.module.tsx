import { Module } from '@nestjs/common';
import { ProductUtils } from './product/utils.product';

@Module({
  providers: [ProductUtils],
  exports: [ProductUtils],
})
export class UtilsModule {}