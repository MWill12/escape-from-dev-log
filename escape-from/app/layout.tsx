import localFont from 'next/font/local';
import "./globals.css";


export const EscapeFromFont = localFont({
  src: [
    {
    path: '../public/fonts/EscapeFrom.ttf',
    weight: '400',
    style: 'normal',
    },
  ],
  variable: '--font-escape-font',
  display: 'swap',
});

export const metadata = {
  title: "Escape From..",
  description: "My blog fr",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={EscapeFromFont.variable}>
      <body
        className={`${EscapeFromFont.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
