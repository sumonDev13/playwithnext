import React from "react";
import Link from "next/link";
import { FolderKanban, PlusCircle, Search } from "lucide-react";

// Define the props for our component
type HeaderProps = {
  variant: "full" | "minimal";
};

const Header = ({ variant }: HeaderProps) => {
  return (
    <header className="bg-white/75 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and App Name (Always visible) */}
          <div
            className={`flex-shrink-0 ${
              variant === "minimal" ? "mx-auto" : ""
            }`}
          >
            <Link href="/" className="flex items-center gap-2">
              <FolderKanban className="h-7 w-7 text-indigo-600" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                FileFlow
              </span>
            </Link>
          </div>

          {variant === "full" && (
            <>
              {/* Search Bar (Centered) */}
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search files..."
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Actions and User Profile */}
              <div className="flex items-center gap-4 ml-4">
                <button
                  type="button"
                  className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <PlusCircle className="h-5 w-5" />
                  <span>New Upload</span>
                </button>
                <div className="flex-shrink-0">
                  <img
                    className="h-9 w-9 rounded-full ring-2 ring-offset-2 ring-indigo-200"
                    src="https://i.pravatar.cc/40?img=1" // Placeholder image
                    alt="User Avatar"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
