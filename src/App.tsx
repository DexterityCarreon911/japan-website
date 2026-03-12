import React, { useState, useEffect } from 'react';
import QRAuthPage from './components/QRAuthPage';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import BookLibrary from './components/BookLibrary';
import BookDetailModal from './components/BookDetailModal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { booksApi } from './services/booksApi';
import { BookItem } from './types/books';

const App: React.FC = () => {
  const [authStep, setAuthStep] = useState<'qr' | 'loading' | 'authenticated'>('qr');
  const [books, setBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'library' | 'categories' | 'about'>('home');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Check if user is already authenticated (from localStorage)
  useEffect(() => {
    // Check URL parameters for skip authentication
    const urlParams = new URLSearchParams(window.location.search);
    const skipAuth = urlParams.get('skip');
    
    if (skipAuth === 'true') {
      // Skip QR page and go directly to loading
      setAuthStep('loading');
      setTimeout(() => {
        handleLoadingComplete();
      }, 1000);
      return;
    }
    
    // For testing, always show QR page first
    localStorage.removeItem('jkl_authenticated');
    localStorage.removeItem('jkl_auth_time');
    setAuthStep('qr');
    
    // Uncomment below for production use
    /*
    const authStatus = localStorage.getItem('jkl_authenticated');
    const authTime = localStorage.getItem('jkl_auth_time');
    if (authStatus === 'true' && authTime) {
      const authTimestamp = parseInt(authTime);
      const now = Date.now();
      // Authentication expires after 24 hours
      if (now - authTimestamp < 24 * 60 * 60 * 1000) {
        setAuthStep('authenticated');
        loadInitialBooks();
      } else {
        // Clear expired authentication
        localStorage.removeItem('jkl_authenticated');
        localStorage.removeItem('jkl_auth_time');
        setAuthStep('qr');
      }
    }
    */
  }, []);

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadInitialBooks = async () => {
    setLoading(true);
    try {
      const response = await booksApi.getJapanBooks(20);
      setBooks(response.items || []);
      showNotification('Books loaded successfully!', 'success');
    } catch (error) {
      console.error('Error loading initial books:', error);
      showNotification('Failed to load books. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleQRAuthenticated = () => {
    setAuthStep('loading');
    showNotification('QR Authentication successful!', 'success');
  };

  const handleLoadingComplete = () => {
    setAuthStep('authenticated');
    // Store authentication status in localStorage
    localStorage.setItem('jkl_authenticated', 'true');
    localStorage.setItem('jkl_auth_time', Date.now().toString());
    showNotification('Welcome to Japan Knowledge Library!', 'success');
    loadInitialBooks();
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setCurrentView('library');
    try {
      const response = await booksApi.searchBooks(query, 20);
      setBooks(response.items || []);
      showNotification(`Found ${response.items?.length || 0} books for "${query}"`, 'success');
    } catch (error) {
      console.error('Error searching books:', error);
      showNotification('Search failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = async (category: string) => {
    setLoading(true);
    setCurrentView('library');
    try {
      const response = await booksApi.getBooksByCategory(category, 20);
      setBooks(response.items || []);
      showNotification(`Loaded ${response.items?.length || 0} books from ${category} category`, 'success');
    } catch (error) {
      console.error('Error loading category books:', error);
      showNotification('Failed to load category books. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleBrowseLibrary = () => {
    setCurrentView('library');
    if (books.length === 0) {
      loadInitialBooks();
    }
  };

  const handleNavigate = (view: 'home' | 'library' | 'categories' | 'about') => {
    setCurrentView(view);
    if (view === 'library' && books.length === 0) {
      loadInitialBooks();
    }
  };

  const handleBookSelect = (book: BookItem) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  // Show QR authentication page
  if (authStep === 'qr') {
    return <QRAuthPage onAuthenticated={handleQRAuthenticated} />;
  }

  // Show loading screen with Three.js animations
  if (authStep === 'loading') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // Show main application
  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
          notification.type === 'success' ? 'bg-green-600' :
          notification.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        } text-white`}>
          {notification.message}
        </div>
      )}

      <Navigation 
        onSearch={handleSearch} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      {currentView === 'home' && (
        <>
          <HeroSection 
            onSearch={handleSearch} 
            onBrowseLibrary={handleBrowseLibrary}
          />
          <CategoriesSection onCategorySelect={handleCategorySelect} />
        </>
      )}
      
      {currentView === 'categories' && (
        <CategoriesSection onCategorySelect={handleCategorySelect} />
      )}
      
      {currentView === 'library' && (
        <BookLibrary 
          books={books} 
          loading={loading}
          onBookSelect={handleBookSelect}
        />
      )}

      {currentView === 'about' && (
        <AboutSection />
      )}
      
      <Footer />
      
      <BookDetailModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
