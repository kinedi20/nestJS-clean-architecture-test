import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from 'src/core/entities/book.entity';
import { User } from 'src/core/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'gestio_biblio',
  entities: [Book, User],
  synchronize: true,
};