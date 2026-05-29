import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Study Deck
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Organize your study materials, build flashcards, and track your progress
          — all in one place.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="cta">
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
