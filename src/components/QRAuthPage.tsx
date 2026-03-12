import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import QRCode from 'qrcode';

const QRAuthPage: React.FC<{ onAuthenticated: () => void }> = ({ onAuthenticated }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    try {
      // Generate a unique session ID
      const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      const authUrl = `${window.location.origin}/auth/${sessionId}`;
      
      // Generate QR code
      const qrDataUrl = await QRCode.toDataURL(authUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: '#ffffff',
          light: '#1a1a1a'
        }
      });
      
      setQrCodeUrl(qrDataUrl);
      
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleBypass = () => {
    setIsAuthenticated(true);
    
    setTimeout(() => {
      onAuthenticated();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-charcoal to-black flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-japanese-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sakura-pink rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-japanese-red rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Main authentication card */}
        <div className="bg-dark-navy/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-japanese-red rounded-full mb-4 pulse-red">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Secure Access
            </h1>
            <p className="text-gray-400">
              Scan QR code to enter The Japan Knowledge Library
            </p>
          </div>

          {/* QR Code Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {qrCodeUrl && (
                <div className={`bg-white p-4 rounded-xl shadow-lg transition-all duration-500 ${
                  isAuthenticated ? 'ring-4 ring-green-500' : ''
                }`}>
                  <img 
                    src={qrCodeUrl} 
                    alt="Authentication QR Code" 
                    className="w-48 h-48"
                  />
                  {isAuthenticated && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500/90 rounded-xl">
                      <CheckCircle className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Status Messages */}
          <div className="text-center mb-6">
            {!isAuthenticated ? (
              <>
                <p className="text-gray-300 mb-2">
                  Please scan the QR code above
                </p>
                <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Use your mobile device camera to scan</span>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <p className="text-green-400 font-semibold text-lg">Authentication Successful!</p>
                <p className="text-gray-300">Redirecting to library...</p>
              </div>
            )}
          </div>

          {/* Bypass Section */}
          {!isAuthenticated && (
            <div className="space-y-4">
              <button
                onClick={handleBypass}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Enter Without Scanning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Security Note */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
              <Shield className="w-3 h-3" />
              <span>Secure authentication powered by QR technology</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Japan Knowledge Library © 2024
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Academic Project - BS Information Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRAuthPage;
