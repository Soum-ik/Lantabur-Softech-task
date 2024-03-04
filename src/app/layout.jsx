
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=""> 
        <div className="flex   items-center justify-center  min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
