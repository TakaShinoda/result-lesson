import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="md:flex md:items-center md:justify-between m-8">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
          Pokémon TCG
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <Image
          className="h-16 w-16 rounded-full"
          src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/c92e12fa5b843bd8ab8dfe1ed501e577.png"
          alt=""
          width={64}
          height={64}
        />
      </div>
    </header>
  )
}
