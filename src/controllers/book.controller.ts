import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookUseCase } from '../use-cases/book/book.use-case';
import { Book } from '../core/entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private bookUseCase: BookUseCase) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookUseCase.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookUseCase.getBookById(id);
  }

  @Post()
  createBook(@Body() bookData: Partial<Book>): Promise<Book> {
    return this.bookUseCase.createBook(bookData);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() bookData: Partial<Book>): Promise<Book> {
    return this.bookUseCase.updateBook(id, bookData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number): Promise<boolean> {
    return this.bookUseCase.deleteBook(id);
  }
}

