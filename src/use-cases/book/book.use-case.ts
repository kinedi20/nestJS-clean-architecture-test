import { Injectable } from "@nestjs/common";
import { Book } from "src/core/entities/book.entity";
import { IDataServices } from "src/core/interfaces/data-services.interface";

@Injectable()
export class BookUseCase {

    // Le constructeur injecte une instance de IDataServices, qui fournit les services de données pour les entités.
  constructor(private dataServices: IDataServices) {}

//   Cette méthode retourne une promesse qui résout un tableau de tous les livres en utilisant le service de données.
  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: number): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  createBook(bookData: Partial<Book>): Promise<Book> {
    const book = new Book();
    book.title = bookData.title;
    book.author = bookData.author;
    book.isbn = bookData.isbn;
    return this.dataServices.books.create(book);
  }

  updateBook(id: number, bookData: Partial<Book>): Promise<Book> {
    return this.dataServices.books.update(id, bookData);
  }

  deleteBook(id: number): Promise<boolean> {
    return this.dataServices.books.delete(id);
  }

}