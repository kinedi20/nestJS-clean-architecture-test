import { Repository, DeepPartial } from 'typeorm';
import { IGenericRepository } from '../../../core/abstract/generic-repository.abstract';

export class TypeOrmGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  async getAll(): Promise<T[]> {
    return this._repository.find();
  }

  async get(id: any): Promise<T> {
    return this._repository.findOne(id);
  }

  async create(item: DeepPartial<T>): Promise<T> {
    const newItem = this._repository.create(item);
    return this._repository.save(newItem);
  }

  async update(id: any, item: DeepPartial<T>): Promise<T> {
    await this._repository.update(id, item as any
    );
    return this._repository.findOne(id);

  }
  async delete(id: any): Promise<boolean> {
    const result = await this._repository.delete(id);
    return result.affected > 0;
  }
}