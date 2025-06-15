
import { Input } from "@/components/ui/input" // Импорт компонента Input из UI-библиотеки
import { Button } from "@/components/ui/button" // Импорт компонента Button из UI-библиотеки
import Link from "next/link" // Импорт Link для навигации в Next.js

// Экспорт компонента Header 
export default function Header() {
  return (
    // Хедер: контейнер 
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Левая часть: логотип и навигация */}
      <div className="flex items-center gap-8">
        {/* Логотип BILLIONS */}
        <span className="text-2xl font-bold text-blue-900">BILLIONS</span>
        {/* Навигационное меню */}
        <nav className="flex gap-6 text-gray-600 font-medium">
          {/* Ссылка на страницу Attestations  */}
          <Link href="#" className="text-blue-900">Attestations</Link>
          {/* Ссылка на страницу Schemas  */}
          <Link href="#">Schemas</Link>
        </nav>
      </div>

      {/* Правая часть: поле поиска и кнопка подключения */}
      <div className="flex items-center gap-4">
        {/* Контейнер для поля поиска с иконкой */}
        <div className="relative">
          {/* стили перенесены в input.tsx */}
          <Input
            variant="search" 
            placeholder="Attestation, UID, schema, or address"
          />
          {/* Иконка поиска */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>

        {/* Контейнер для иконки Ethereum и кнопки Connect */}
        <div className="flex items-center gap-2">
          {/* Круглая иконка Ethereum */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 417"
              width="20"
              height="20"
              fill="none"
            >
              <path fill="#343434" d="M127.9 0v141.7L255.7 208z"/>
              <path fill="#8C8C8C" d="M127.9 0L0 208l127.9-66.3z"/>
              <path fill="#3C3C3B" d="M127.9 306.1V416.9L255.8 230z"/>
              <path fill="#8C8C8C" d="M127.9 416.9V306.1L0 230z"/>
              <path fill="#141414" d="M127.9 284.2l127.9-76.1-127.9-66.2z"/>
              <path fill="#393939" d="M0 208l127.9 76.1V141.9z"/>
            </svg>
          </div>
          {/* Кнопка Connect стили перенесены в button.tsx */}
          <Button variant="connect" size="lg">
            Connect
          </Button>
        </div>
      </div>
    </header>
  )
}