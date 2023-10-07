'use client'
import React, { useState } from 'react'

export const KeywordSearchForm = ({
  children,
}: {
  children: React.ReactNode
}) => {
  console.log(children)
  const [keyword, setKeyword] = useState('')
  console.log(keyword)
  return (
    <div>
      <div className="mt-2">
        {children}
        <input
          id="pokemon"
          name="pokemon"
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          className="p-4 block w-full rounded-md border-0 bg-white/10 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}
