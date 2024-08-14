import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmDataServicesModule } from './frameworks/data-services/typeorm/typeorm-data-services.module';
import { BookUseCaseModule } from './use-cases/book/book-use-case.module';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmDataServicesModule,
    BookUseCaseModule,
  ],
  controllers: [BookController],
})
export class AppModule {}
