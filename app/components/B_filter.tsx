'use client'

import { useState, useEffect } from "react"

type Props = {
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  setCurrentPage: (value: number) => void
}

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
}: Props) {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const query = encodeURIComponent(`*[_type == "category"] | order(title asc) { title }`)
        const res = await fetch(
          `https://6nqo6i3e.api.sanity.io/v2023-05-03/data/query/production?query=${query}`
        )
        const { result } = await res.json()
        const categoryTitles = result.map((item: { title: string }) => item.title)
        setCategories(categoryTitles)
        console.log("🧩 Categorías cargadas:", categoryTitles)
      } catch (error) {
        console.error("❌ Error al obtener categorías:", error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-50 hover:text-[#f63562]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
