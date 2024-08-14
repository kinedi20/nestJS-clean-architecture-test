



import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "src/core/entities/book.entity";
import { User } from "src/core/entities/user.entity";
import { IDataServices } from "src/core/interfaces/data-services.interface";
import { Repository } from "typeorm";
import { TypeOrmGenericRepository } from "./typeorm-generic-repository";

// TypeOrmDataServices qui utilise TypeORM pour gérer les entités Book et User. Il injecte les dépôts TypeORM pour ces entités et les encapsule dans des instances de TypeOrmGenericRepository pour fournir des opérations CRUD génériques


@Injectable()
export class TypeOrmDataServices implements IDataServices, OnApplicationBootstrap {

    // Ces propriétés sont des instances de TypeOrmGenericRepository pour les entités Book et User.
    books: TypeOrmGenericRepository<Book>;
    users: TypeOrmGenericRepository<User>;
 
    // Le constructeur injecte les dépôts TypeORM pour les entités Book et User en utilisant @InjectRepository.
    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>,
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {}


    // Cette méthode est appelée lorsque l’application NestJS est démarrée
    // Elle initialise les propriétés books et users avec des instances de TypeOrmGenericRepository, en passant les dépôts correspondants
      onApplicationBootstrap() {
        this.books = new TypeOrmGenericRepository<Book>(this.bookRepository);
        this.users = new TypeOrmGenericRepository<User>(this.userRepository);
      }

}
