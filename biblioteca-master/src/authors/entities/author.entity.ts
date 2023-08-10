import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Book } from 'src/book/entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true}) 
  name: string;

  @ManyToMany(() => Book)
  @JoinTable({
    name: "books_authors",
  })
  books: Book[];
}
