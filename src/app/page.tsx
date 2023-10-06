export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-4/6">
        <label
          htmlFor="pokemon"
          className="block text-sm font-medium leading-6 text-white"
        >
          Search for a Pokemon
        </label>
        <div className="mt-2">
          <input
            id="pokemon"
            name="pokemon"
            type="text"
            className="p-4 block w-full rounded-md border-0 bg-white/10 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </main>
  )
}
