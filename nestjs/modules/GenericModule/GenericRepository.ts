import { EntityRepository, Repository } from 'typeorm';
import { GenericEntity } from '../../database/entities/GenericEntity';

@EntityRepository()
export class GenericRepository extends Repository<GenericEntity> {}
