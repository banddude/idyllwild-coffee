'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Coffee } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/executive-summary', label: 'Executive Summary' },
    { href: '/market-research', label: 'Market Research' },
    { href: '/business-plan', label: 'Business Plan' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-900">
            <Coffee className="w-6 h-6" />
            Idyllwild Coffee
          </Link>
          <div className="flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  pathname === link.href
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
