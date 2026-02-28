'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: '首页', href: '/' },
    { name: '关于', href: '/about' },
    { name: '服务', href: '/services' },
    { name: '博客', href: '/blog' },
    { name: '联系', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-blue-200/50 bg-white/70 py-2 backdrop-blur-lg dark:border-blue-800/50 dark:bg-gray-900/70'
          : 'border-transparent bg-white/80 py-3 backdrop-blur-lg dark:bg-gray-900/80'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
              <span className="text-sm font-bold">N</span>
            </div>
            <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Next.js 16
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-5 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-all hover:scale-105 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-blue-200/50 dark:bg-blue-800/50" />
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-all hover:scale-105 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Github className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 rounded-md p-2 text-gray-700 transition-all hover:scale-105 hover:bg-blue-100 dark:text-gray-200 dark:hover:bg-blue-900/30"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-10 border-b border-blue-200/50 bg-white/90 backdrop-blur-lg duration-300 md:hidden dark:border-blue-800/50 dark:bg-gray-900/90">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-4 py-3 text-base font-medium text-gray-700 transition-all hover:scale-105 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-200 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="my-2 border-t border-blue-200/50 dark:border-blue-800/50" />
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 text-gray-600 transition-all hover:scale-105 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
