import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "src/core/entities/book.entity";
import { User } from "src/core/entities/user.entity";
import { DATA_SERVICES} from '../../../core/interfaces/data-services.interface';
import { TypeOrmDataServices } from "./typeorm-data-services.service";

@Module({
    imports: [TypeOrmModule.forFeature([Book, User])],
    providers: [
      {
        provide:  DATA_SERVICES,
        useClass: TypeOrmDataServices,
      },
    ],
    exports: [ DATA_SERVICES],
  })
  export class TypeOrmDataServicesModule {}