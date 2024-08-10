export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    genre: string;
    publishedYear: number;
  }
  
  const books: Book[] = [
    {
      id: 1,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      price: 85000,
      genre: "Fiction",
      publishedYear: 2005,
    },
    {
      id: 2,
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      price: 90000,
      genre: "Historical Fiction",
      publishedYear: 1980,
    },
    {
      id: 3,
      title: "Perahu Kertas",
      author: "Dee Lestari",
      price: 75000,
      genre: "Romance",
      publishedYear: 2009,
    },
    {
      id: 4,
      title: "Cantik Itu Luka",
      author: "Eka Kurniawan",
      price: 95000,
      genre: "Magical Realism",
      publishedYear: 2002,
    },
    {
      id: 5,
      title: "Supernova",
      author: "Dee Lestari",
      price: 80000,
      genre: "Science Fiction",
      publishedYear: 2001,
    },
    {
      id: 6,
      title: "Negeri 5 Menara",
      author: "A. Fuadi",
      price: 85000,
      genre: "Inspirational",
      publishedYear: 2009,
    },
    {
      id: 7,
      title: "Ayat-Ayat Cinta",
      author: "Habiburrahman El Shirazy",
      price: 78000,
      genre: "Romance",
      publishedYear: 2004,
    },
    {
      id: 8,
      title: "Dilan: Dia Adalah Dilanku Tahun 1990",
      author: "Pidi Baiq",
      price: 75000,
      genre: "Romance",
      publishedYear: 2014,
    },
    {
      id: 9,
      title: "Tetralogi Buru: Rumah Kaca",
      author: "Pramoedya Ananta Toer",
      price: 95000,
      genre: "Historical Fiction",
      publishedYear: 1988,
    },
    {
      id: 10,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: 120000,
      genre: "Non-fiction",
      publishedYear: 2011,
    },
  ];
  
  export function GET() {
    return Response.json(books);
  }
  