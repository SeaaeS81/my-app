import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    // Обёртка для хедера: горизонтальное расположение, отступы
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      
      {/* Левая часть: логотип и навигация */}
      <div className="flex items-center gap-8">
        
        {/* Логотип BILLIONS */}
        <span className="text-2xl font-bold text-blue-900">BILLIONS</span>

        {/* Навигационные ссылки */}
        <nav className="flex gap-6 text-gray-600 font-medium">
          {/* Активная ссылка "Attestations" (синий цвет) */}
          <Link href="#" className="text-blue-900">Attestations</Link>
          {/* Неактивная ссылка "Schemas" */}
          <Link href="#">Schemas</Link>
        </nav>
      </div>

      {/* Правая часть: поле поиска и кнопка */}
      <div className="flex items-center gap-4">
        
        {/* Поле ввода с иконкой поиска */}
        <div className="relative">
          <Input
            placeholder="Attestation, UID, schema, or address"
            className="rounded-full pl-10 pr-4 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[300px]"
          />
          {/* Иконка  внутри input слева */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            
          </div>
        </div>

        {/* Иконка Ethereum + Кнопка Connect */}
        <div className="flex items-center gap-2">
          
          {/* Круглая кнопка с иконкой Ethereum */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
  {/* Вставленный SVG Ethereum */}
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


          {/* Кнопка подключения */}
          <Button className="bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-6 h-10">
            Connect
          </Button>
        </div>
      </div>
    </header>
  )
}
