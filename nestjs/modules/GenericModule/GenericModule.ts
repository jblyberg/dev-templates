import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericRepository } from './GenericRepository';
import { UserRepository } from '../auth/UserRepository';
import { GenericController } from './GenericController';
import { GenericService } from './GenericService';

@Module({
  imports: [TypeOrmModule.forFeature([GenericRepository]), TypeOrmModule.forFeature([UserRepository])],
  controllers: [GenericController],
  providers: [GenericService],
})
export class GenericModule {}
