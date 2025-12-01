/* 
 Этот файл задает общий каркас приложения.
 Он добавляет базовый HTML и оборачивает каждую страницу.
 Он нужен, чтобы любая страница выводилась внутри общего тела сайта.
*/
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Эти данные задают заголовок и описание сайта.
export const metadata: Metadata = {
  title: "Showda",
  description: "Пустой старт для будущих страниц.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Эта панель дает ссылки по разделам. */}
        <Navigation />
        {/* Здесь отображаются страницы приложения. */}
        {children}
      </body>
    </html>
  );
}
