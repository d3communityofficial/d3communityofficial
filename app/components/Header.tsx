'use client';

import { Github, Twitter, Linkedin, Youtube, Instagram, CalendarDays, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='flex justify-between items-center px-2'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-2xl text-white flex items-center justify-center font-bold text-2xl shadow-lg border border-white/10' style={{ background: 'var(--gradient-primary)' }}>
          D3
        </div>
        <div>
          <h1 className='font-bold text-xl leading-none tracking-tight'>Digital Dreamers Den</h1>
          <span className='text-xs text-dark-primary font-mono mt-1 block'>/// EST. 2024</span>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? (
            <Sun className='w-5 h-5' />
          ) : (
            <Moon className='w-5 h-5' />
          )}
        </button>

        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='GitHub'
        >
          <Github className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='Twitter'
        >
          <Twitter className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='LinkedIn'
        >
          <Linkedin className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='YouTube'
        >
          <Youtube className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='Instagram'
        >
          <Instagram className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all'
          aria-label='Meetup Registration'
        >
          <CalendarDays className='w-5 h-5' />
        </a>
      </div>
    </header>
  );
}

