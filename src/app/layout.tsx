import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Next.js 16 SSR 模板',
  description: '生产就绪的 Next.js 16 SSR 模板',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroUIProvider>
            <Navbar />
            <main className="container mx-auto px-4 pt-24 sm:pt-32">{children}</main>
            <footer className="bg-background border-t py-12">
              <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
                <p>© 2026 Next.js 16 SSR Template. All rights reserved.</p>
              </div>
            </footer>
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
