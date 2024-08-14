// classe abstraite générique IGenericRepository avec des méthodes pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur n’importe quel type d’entité. Les classes qui étendront IGenericRepository devront implémenter ces méthodes pour gérer les entités spécifiques

import { DeepPartial } from "typeorm";




// / IGenericRepository est une classe abstraite générique. Le mot-clé abstract signifie que cette classe ne peut pas être instanciée directement. Elle sert de modèle pour d’autres classes qui l’étendront.



// <T> est un type générique, ce qui permet à cette classe de fonctionner avec n’importe quel type d’entité (par exemple, Book, User).
export abstract class IGenericRepository<T> {

    // Cette méthode abstraite doit être implémentée dans les classes dérivées. Elle retourne une promesse qui résout un tableau d’objets de type T.
    abstract getAll(): Promise<T[]>;

    // Cette méthode abstraite prend un identifiant (id) en paramètre et retourne une promesse qui résout un objet de type T.
    abstract get(id: any): Promise<T>;


    // Cette méthode abstraite prend un objet de type T en paramètre et retourne une promesse qui résout l’objet créé de type T
    abstract create(item: T): Promise<T>;
    


    // Cette méthode abstraite prend un identifiant (id) et un objet de type T en paramètre, et retourne une promesse qui résout l’objet mis à jour de type T
    abstract update(id: any, item: DeepPartial<T>): Promise<T>;

    // Cette méthode abstraite prend un identifiant (id) en paramètre et retourne une promesse qui résout un booléen indiquant si la suppression a réussi
    abstract delete(id: any): Promise<boolean>;
  }

