import sql from "@/db";

export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    genre: string;
    publishedYear: number;
  }
  
  export async function GET() {
    const books = await sql `SELECT * FROM books`;
    return Response.json(books);
  }
  