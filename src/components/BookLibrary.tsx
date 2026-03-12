import React from 'react';
import { BookItem } from '../types/books';
import { Eye, Calendar, User, Star, ExternalLink } from 'lucide-react';

interface BookLibraryProps {
  books: BookItem[];
  loading: boolean;
  onBookSelect: (book: BookItem) => void;
}

const BookLibrary: React.FC<BookLibraryProps> = ({ books, loading, onBookSelect }) => {
  const truncateDescription = (description: string | undefined, maxLength: number = 150) => {
    if (!description) return 'No description available.';
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const getPublishedYear = (publishedDate?: string) => {
    if (!publishedDate) return 'Unknown';
    const year = publishedDate.match(/\d{4}/);
    return year ? year[0] : 'Unknown';
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
              Book Library
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 bg-japanese-red rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-japanese-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-japanese-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="mt-4 text-gray-300">Loading amazing books about Japan...</p>
          </div>
          
          {/* Skeleton Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-charcoal rounded-xl overflow-hidden border border-gray-800">
                <div className="aspect-[3/4] skeleton"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 skeleton rounded"></div>
                  <div className="h-4 skeleton rounded w-3/4"></div>
                  <div className="h-4 skeleton rounded w-1/2"></div>
                  <div className="h-16 skeleton rounded"></div>
                  <div className="h-10 skeleton rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (books.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-navy">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">No Books Found</h2>
            <p className="text-gray-300 mb-6">Try adjusting your search or browse our categories.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-japanese-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                Browse Categories
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                New Search
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            Book Library
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Discover our collection of books about Japanese history, culture, and traditions.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-japanese-red rounded-full"></div>
            <span>{books.length} books found</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="group bg-charcoal rounded-xl overflow-hidden border border-gray-800 hover:border-japanese-red transition-all duration-500 card-hover fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-japanese-red/20 to-gray-800">
                    <div className="text-center p-4">
                      <div className="text-white text-6xl mb-2 opacity-50">📚</div>
                      <p className="text-white/70 text-sm">No Cover Available</p>
                    </div>
                  </div>
                )}
                
                {/* Rating Badge */}
                {book.volumeInfo.averageRating && (
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">
                      {book.volumeInfo.averageRating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Book Information */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-japanese-red transition-colors duration-300">
                  {book.volumeInfo.title}
                </h3>
                
                {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <User size={14} className="mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">
                      {book.volumeInfo.authors.join(', ')}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 flex-shrink-0" />
                    <span>{getPublishedYear(book.volumeInfo.publishedDate)}</span>
                  </div>
                  {book.volumeInfo.pageCount && (
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                      {book.volumeInfo.pageCount} pages
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {truncateDescription(book.volumeInfo.description)}
                </p>

                <div className="flex space-x-2">
                  <button
                    onClick={() => onBookSelect(book)}
                    className="flex-1 bg-japanese-red hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium hover:scale-105 active:scale-95"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  {book.volumeInfo.previewLink && (
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookLibrary;
