import './globals.scss'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ch">
      <body>
        {children}
      </body>
    </html>
  );
}
