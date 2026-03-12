import React from 'react';
import { BookItem } from '../types/books';
import { X, Calendar, User, Building, FileText, ExternalLink } from 'lucide-react';

interface BookDetailModalProps {
  book: BookItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;

  const getPublishedYear = (publishedDate?: string) => {
    if (!publishedDate) return 'Unknown';
    const year = publishedDate.match(/\d{4}/);
    return year ? year[0] : 'Unknown';
  };

  const cleanDescription = (description?: string) => {
    if (!description) return 'No description available.';
    return description.replace(/<[^>]*>/g, '');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative bg-dark-navy rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Book Cover Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-japanese-red to-gray-800 p-8 flex items-center justify-center">
              {book.volumeInfo.imageLinks?.large || book.volumeInfo.imageLinks?.medium || book.volumeInfo.imageLinks?.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.large || book.volumeInfo.imageLinks.medium || book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
                />
              ) : (
                <div className="text-center">
                  <div className="text-white text-8xl mb-4">📚</div>
                  <p className="text-white">No Cover Available</p>
                </div>
              )}
            </div>

            {/* Book Details Section */}
            <div className="md:w-2/3 p-8 overflow-y-auto max-h-[90vh]">
              <h1 className="text-3xl font-bold text-white mb-4">
                {book.volumeInfo.title}
              </h1>

              {/* Authors */}
              {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
                <div className="flex items-center text-gray-300 mb-4">
                  <User size={20} className="mr-2 text-japanese-red" />
                  <span className="text-lg">
                    {book.volumeInfo.authors.join(', ')}
                  </span>
                </div>
              )}

              {/* Publisher */}
              {book.volumeInfo.publisher && (
                <div className="flex items-center text-gray-300 mb-4">
                  <Building size={20} className="mr-2 text-japanese-red" />
                  <span>{book.volumeInfo.publisher}</span>
                </div>
              )}

              {/* Published Date */}
              {book.volumeInfo.publishedDate && (
                <div className="flex items-center text-gray-300 mb-4">
                  <Calendar size={20} className="mr-2 text-japanese-red" />
                  <span>Published: {getPublishedYear(book.volumeInfo.publishedDate)}</span>
                </div>
              )}

              {/* Page Count */}
              {book.volumeInfo.pageCount && (
                <div className="flex items-center text-gray-300 mb-4">
                  <FileText size={20} className="mr-2 text-japanese-red" />
                  <span>{book.volumeInfo.pageCount} pages</span>
                </div>
              )}

              {/* Categories */}
              {book.volumeInfo.categories && book.volumeInfo.categories.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {book.volumeInfo.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-japanese-red/20 text-japanese-red px-3 py-1 rounded-full text-sm border border-japanese-red/30"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {cleanDescription(book.volumeInfo.description)}
                </p>
              </div>

              {/* Preview Link */}
              {book.volumeInfo.previewLink && (
                <div className="mb-6">
                  <a
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-japanese-red hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Preview Book
                  </a>
                </div>
              )}

              {/* Additional Info */}
              {book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.length > 0 && (
                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Book Details</h3>
                  <div className="space-y-2">
                    {book.volumeInfo.industryIdentifiers.map((identifier, index) => (
                      <div key={index} className="text-gray-300">
                        <span className="font-medium">{identifier.type}:</span> {identifier.identifier}
                      </div>
                    ))}
                    <div className="text-gray-300">
                      <span className="font-medium">Language:</span> {book.volumeInfo.language || 'Unknown'}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium">Print Type:</span> {book.volumeInfo.printType || 'Unknown'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
