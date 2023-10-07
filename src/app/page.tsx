import { KeywordSearchForm } from './KeywordSearchForm'
import { KeywordSearchLabel } from './KeywordSearchLabel'
export default function Home() {
  console.log('page.tsx')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-4/6">
        <KeywordSearchForm>
          <KeywordSearchLabel />
        </KeywordSearchForm>
      </div>
    </main>
  )
}
