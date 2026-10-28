import './globals.css';

export const metadata = {
  title: 'Aarchi Rai',
  description: 'Nous créons des marques qui parlent avant que vous n\'ouvriez la bouche.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}