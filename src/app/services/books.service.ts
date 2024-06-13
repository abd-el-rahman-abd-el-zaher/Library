import { Injectable } from '@angular/core';
import { IBook } from '../models/IBook.interface';
import { Observable, of } from 'rxjs';
import { IPagination } from '../models/IPagination.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  private _books: IBook[] = [
    {
      id: 1,
      title: 'The Quantum Universe',
      author: 'Brian Cox',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71QAzXgmC9L.jpg',
      count: 1,
      price: 100,
      tags: ['physics', 'science', 'universe'],
      description:
        'The Quantum Universe provides a comprehensive introduction to the mysterious world of quantum mechanics. Brian Cox makes complex concepts accessible, explaining how quantum physics underpins the fabric of our universe.',
      genre: 'Science',
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      img: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg',
      count: 2,
      price: 150,
      tags: ['history', 'anthropology', 'civilization'],
      description:
        'In Sapiens, Yuval Noah Harari explores the history of our species from the emergence of Homo sapiens in the Stone Age to the political and technological revolutions of the modern age.',
      genre: 'History',
    },
    {
      id: 3,
      title: 'The Innovators',
      author: 'Walter Isaacson',
      img: 'https://images-na.ssl-images-amazon.com/images/I/91CWdR92KdL.jpg',
      count: 1,
      price: 200,
      tags: ['technology', 'innovation', 'history'],
      description:
        'The Innovators is a riveting account of the pioneers who invented the computer and the Internet. Walter Isaacson profiles remarkable men and women, offering a revealing narrative of their groundbreaking achievements.',
      genre: 'Technology',
    },
    {
      id: 4,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71I7l4Z3FHL.jpg',
      count: 5,
      price: 250,
      tags: ['psychology', 'behavior', 'cognition'],
      description:
        'In Thinking, Fast and Slow, Daniel Kahneman, Nobel laureate, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.',
      genre: 'Psychology',
    },
    {
      id: 5,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg',
      count: 3,
      price: 120,
      tags: ['fiction', 'classic', 'literature'],
      description:
        "Harper Lee's To Kill a Mockingbird is a timeless novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
      genre: 'Literature',
    },
    {
      id: 5,
      title: 'Freakonomics',
      author: 'Steven D. Levitt',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71qwRz5CTiL.jpg',
      count: 2,
      price: 180,
      tags: ['economics', 'sociology', 'behavior'],
      description:
        'Freakonomics reveals the hidden side of everything, from cheating and crime to parenting and sports, by applying economic theory to diverse and everyday topics.',
      genre: 'Economics',
    },
    {
      id: 7,
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71T0dMBirwL.jpg',
      count: 4,
      price: 130,
      tags: ['psychology', 'self-help', 'behavior'],
      description:
        'Charles Duhigg explores the science of habit formation in our lives, companies, and societies in The Power of Habit, revealing why habits exist and how they can be changed.',
      genre: 'Psychology',
    },
    {
      id: 8,
      title: 'Quiet: The Power of Introverts',
      author: 'Susan Cain',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81tKtU9Q4DL.jpg',
      count: 3,
      price: 210,
      tags: ['psychology', 'self-help', 'behavior'],
      description:
        'In Quiet, Susan Cain argues that we dramatically undervalue introverts and shows how much we lose in doing so. She charts the rise of the Extrovert Ideal and looks at the psychological benefits of being quiet.',
      genre: 'Psychology',
    },
    {
      id: 9,
      title: 'The Art of War',
      author: 'Sun Tzu',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wxemfNxJL.jpg',
      count: 1,
      price: 90,
      tags: ['strategy', 'philosophy', 'military'],
      description:
        'The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters.',
      genre: 'Philosophy',
    },
    {
      id: 10,
      title: '1984',
      author: 'George Orwell',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81ICvb5dQUL.jpg',
      count: 2,
      price: 170,
      tags: ['fiction', 'dystopia', 'classic'],
      description:
        '1984, George Orwell’s dystopian novel, is a profound and terrifying look at a totalitarian regime that uses surveillance, censorship, and fear to control its citizens.',
      genre: 'Science Fiction',
    },
    {
      id: 11,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      count: 1,
      price: 140,
      tags: ['biography', 'technology', 'innovation'],
      description:
        'Walter Isaacson’s biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues.',
      genre: 'Biography',
    },
    {
      id: 12,
      title: 'The History of the Ancient World',
      author: 'Susan Wise Bauer',
      img: 'https://images-na.ssl-images-amazon.com/images/I/91Uw8n9HfJL.jpg',
      count: 2,
      price: 110,
      tags: ['history', 'ancient', 'civilization'],
      description:
        'The History of the Ancient World covers the great events and figures that shaped the early civilizations of the world, from the invention of writing to the fall of Rome.',
      genre: 'History',
    },
    {
      id: 13,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71I9UncHcqL.jpg',
      count: 3,
      price: 160,
      tags: ['biology', 'evolution', 'science'],
      description:
        'In The Selfish Gene, Richard Dawkins uses the principles of evolutionary biology to propose a gene-centered view of evolution, offering insights into the behavior and nature of organisms.',
      genre: 'Science',
    },
    {
      id: 14,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL.jpg',
      count: 1,
      price: 180,
      tags: ['programming', 'software', 'technology'],
      description:
        'Clean Code is a handbook of agile software craftsmanship. It explains the principles, patterns, and practices of writing clean code, with numerous examples in Java.',
      genre: 'Technology',
    },
    {
      id: 15,
      title: 'Meditations',
      author: 'Marcus Aurelius',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81-5XOaB8YL.jpg',
      count: 5,
      price: 135,
      tags: ['philosophy', 'stoicism', 'classic'],
      description:
        'Meditations by Marcus Aurelius is a series of personal writings by the Roman Emperor, setting forth his ideas on Stoic philosophy. It’s a guide to his thoughts on how to live a virtuous life.',
      genre: 'Philosophy',
    },
    {
      id: 16,
      title: 'The Wealth of Nations',
      author: 'Adam Smith',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81lX5o4Tz9L.jpg',
      count: 2,
      price: 145,
      tags: ['economics', 'philosophy', 'politics'],
      description:
        'The Wealth of Nations, by Adam Smith, is the magnum opus of the Scottish economist and philosopher, laying the foundations of classical economics.',
      genre: 'Economics',
    },
    {
      id: 17,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81s9klFGhwL.jpg',
      count: 1,
      price: 190,
      tags: ['fiction', 'classic', 'romance'],
      description:
        'Pride and Prejudice is a romantic novel of manners written by Jane Austen, exploring the issues of marriage, morality, and misunderstandings in the early 19th century.',
      genre: 'Literature',
    },
    {
      id: 18,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
      count: 4,
      price: 115,
      tags: ['self-help', 'psychology', 'philosophy'],
      description:
        'The Subtle Art of Not Giving a F*ck by Mark Manson offers a counterintuitive approach to living a good life, advocating for embracing the limitations of life and focusing on what truly matters.',
      genre: 'Self-help',
    },
    {
      id: 19,
      title: 'Becoming',
      author: 'Michelle Obama',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg',
      count: 3,
      price: 200,
      tags: ['biography', 'memoir', 'inspiration'],
      description:
        'In Becoming, Michelle Obama chronicles the experiences that have shaped her—from her childhood in Chicago to her years as First Lady of the United States.',
      genre: 'Biography',
    },
    {
      id: 20,
      title: 'Educated',
      author: 'Tara Westover',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg',
      count: 2,
      price: 180,
      tags: ['memoir', 'education', 'inspiration'],
      description:
        'Educated is a memoir by Tara Westover, detailing her struggle to reconcile her desire for education and autonomy with her upbringing in a strict and isolated environment in rural Idaho.',
      genre: 'Memoir',
    },
    {
      id: 21,
      title: 'Atomic Habits',
      author: 'James Clear',
      img: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
      count: 5,
      price: 170,
      tags: ['self-help', 'psychology', 'habits'],
      description:
        'Atomic Habits by James Clear offers a proven framework for improving every day, presenting practical strategies to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
      genre: 'Self-help',
    },
    {
      id: 22,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81dV+aOnOIL.jpg',
      count: 4,
      price: 150,
      tags: ['fiction', 'dystopia', 'classic'],
      description:
        'Brave New World is Aldous Huxley’s prophetic novel that describes a dystopian world of the future, where the use of technology and conditioning controls society and suppresses individuality.',
      genre: 'Science Fiction',
    },
  ];

  public getBooks(a:number): Observable<IPagination<IBook>> {
    let books :IPagination<IBook> = {
      count : this._books.length,
      list : this._books
    }
    return of(books);
  }
}
