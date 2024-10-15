// src/app/layout.js
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

// src/app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

