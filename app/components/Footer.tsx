import React from 'react';
import Link from 'next/link';
import { FolderKanban } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="flex items-center gap-2">
               <FolderKanban className="h-6 w-6 text-slate-500" />
               <span className="font-semibold text-slate-700">FileFlow</span>
            </Link>
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          
          {/* Footer Links */}
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="/help" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors hover:underline">
              Help Center
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;