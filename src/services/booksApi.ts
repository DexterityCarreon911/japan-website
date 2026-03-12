import { BooksResponse } from '../types/books';

const GOOGLE_BOOKS_API_BASE = 'https://www.googleapis.com/books/v1/volumes';

export const booksApi = {
  async searchBooks(query: string, maxResults: number = 20): Promise<BooksResponse> {
    try {
      const response = await fetch(
        `${GOOGLE_BOOKS_API_BASE}?q=${encodeURIComponent(query)}&maxResults=${maxResults}&langRestrict=en&printType=books&orderBy=relevance`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error searching books:', error);
      throw error;
    }
  },

  async getJapanBooks(maxResults: number = 40): Promise<BooksResponse> {
    const comprehensiveQueries = [
      // History & Historical Periods
      'japan history ancient samurai',
      'japanese feudal age edo period',
      'tokugawa shogunate history',
      'meiji restoration japan',
      'japanese imperial history',
      'world war II japan pacific',
      
      // Culture & Traditions
      'japanese culture traditions customs',
      'japanese tea ceremony philosophy',
      'japanese zen buddhism spirituality',
      'japanese shinto religion mythology',
      'japanese festivals celebrations',
      'japanese martial arts dojo',
      
      // Food & Cuisine
      'japanese cuisine sushi ramen',
      'japanese cooking traditions washoku',
      'japanese food culture philosophy',
      'japanese culinary arts techniques',
      'japanese regional cuisine izakaya',
      'japanese tea culture matcha',
      
      // Arts & Literature
      'japanese literature haiku poetry',
      'japanese art ukiyo woodblocks',
      'japanese calligraphy sumi-e',
      'japanese theater kabuki noh',
      'japanese gardens zen design',
      'japanese architecture temples',
      
      // Modern Society
      'modern japan society technology',
      'japanese business culture kaizen',
      'japanese pop culture anime manga',
      'contemporary japanese lifestyle',
      'japanese education system',
      'japanese urban tokyo culture'
    ];
    
    // Get multiple queries for better coverage
    const randomQuery = comprehensiveQueries[Math.floor(Math.random() * comprehensiveQueries.length)];
    return this.searchBooks(randomQuery, maxResults);
  },

  async getBooksByCategory(category: string, maxResults: number = 30): Promise<BooksResponse> {
    const enhancedCategoryQueries: { [key: string]: string } = {
      // History Categories
      'history': 'japan ancient medieval modern history',
      'samurai': 'samurai warriors bushido code japan',
      'edo': 'edo period tokugawa shogunate',
      'meiji': 'meiji restoration modernization japan',
      'worldwar': 'world war II pacific japan',
      
      // Culture Categories
      'culture': 'japanese culture traditions lifestyle',
      'traditions': 'japanese traditional customs festivals',
      'religion': 'japanese buddhism shinto spirituality',
      'philosophy': 'japanese zen philosophy bushido',
      'festivals': 'japanese festivals matsuri celebrations',
      'ceremonies': 'japanese tea ceremony traditions',
      
      // Food Categories
      'food': 'japanese cuisine sushi ramen cooking',
      'sushi': 'japanese sushi techniques traditions',
      'ramen': 'japanese ramen noodles cuisine',
      'washoku': 'japanese traditional washoku cooking',
      'tea': 'japanese tea ceremony matcha culture',
      'izakaya': 'japanese izakaya food culture',
      
      // Arts Categories
      'literature': 'japanese literature haiku poetry novels',
      'art': 'japanese art ukiyo woodblocks painting',
      'theater': 'japanese theater kabuki noh bunraku',
      'music': 'japanese traditional music instruments',
      'gardens': 'japanese zen gardens design philosophy',
      'architecture': 'japanese temple architecture design',
      
      // Modern Categories
      'modern': 'contemporary japan society technology',
      'anime': 'japanese anime manga culture history',
      'business': 'japanese business culture management',
      'education': 'japanese education system society',
      'urban': 'modern tokyo urban japanese life',
      'technology': 'japanese innovation technology society'
    };
    
    const query = enhancedCategoryQueries[category] || 'japanese history culture food';
    return this.searchBooks(query, maxResults);
  },

  // New specialized search functions
  async getHistoryBooks(maxResults: number = 25): Promise<BooksResponse> {
    const historyQueries = [
      'japan ancient history mythology',
      'japanese feudal age samurai',
      'edo period tokugawa japan',
      'meiji restoration modernization',
      'japanese imperial dynasty history',
      'world war II japan pacific'
    ];
    
    const randomQuery = historyQueries[Math.floor(Math.random() * historyQueries.length)];
    return this.searchBooks(randomQuery, maxResults);
  },

  async getFoodBooks(maxResults: number = 25): Promise<BooksResponse> {
    const foodQueries = [
      'japanese cuisine sushi techniques',
      'japanese ramen noodles culture',
      'japanese traditional washoku cooking',
      'japanese tea ceremony matcha',
      'japanese culinary arts philosophy',
      'japanese regional cuisine traditions'
    ];
    
    const randomQuery = foodQueries[Math.floor(Math.random() * foodQueries.length)];
    return this.searchBooks(randomQuery, maxResults);
  },

  async getCultureBooks(maxResults: number = 25): Promise<BooksResponse> {
    const cultureQueries = [
      'japanese culture traditions customs',
      'japanese zen buddhism spirituality',
      'japanese festivals celebrations',
      'japanese martial arts philosophy',
      'japanese tea culture traditions',
      'japanese social customs etiquette'
    ];
    
    const randomQuery = cultureQueries[Math.floor(Math.random() * cultureQueries.length)];
    return this.searchBooks(randomQuery, maxResults);
  }
};
