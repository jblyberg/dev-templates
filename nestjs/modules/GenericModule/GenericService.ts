import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericRepository } from './GenericRepository';

@Injectable()
export class GenericService {
  private logger = new Logger('GenericService');

  constructor(
    @InjectRepository(GenericRepository)
    private genericRepository: GenericRepository,
  ) {}

  helloWorld() {
    return {
      hello: 'world',
    };
  }
}
