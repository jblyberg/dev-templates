import { Controller, Logger, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SiteGuard } from '../site/guards/SiteGuard';
import { GenericService } from './GenericService';

@Controller('user-settings')
export class GenericController {
  private logger = new Logger('GenericController');

  constructor(private genericService: GenericService) {}

  @Get('/hello')
  @UseGuards(AuthGuard(), SiteGuard)
  helloWorld(): object {
    return this.genericService.helloWorld();
  }
}
