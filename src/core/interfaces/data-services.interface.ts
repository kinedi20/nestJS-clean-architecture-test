import { IGenericRepository } from "../abstract/generic-repository.abstract";
import { Book } from "../entities/book.entity";
import { User } from "../entities/user.entity";

// IDataServices est une interface qui regroupe les services de données pour les entités Book et User
export interface IDataServices {

    // books et users sont des propriétés de type IGenericRepository avec des types génériques Book et User respectivement. Cela signifie que ces propriétés doivent implémenter les méthodes définies dans IGenericRepository pour manipuler les entités Book et User.

    books: IGenericRepository<Book>;
    users: IGenericRepository<User>;
  }
  
  export const DATA_SERVICES = 'DATA_SERVICES';
  