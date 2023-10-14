import React from 'react'

export const Button = () => {
  console.log('Button.tsx')
  return (
    <button
      type="button"
      className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
    >
      Button text
    </button>
  )
}
