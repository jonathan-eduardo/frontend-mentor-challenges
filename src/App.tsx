import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/card'
import { Outlet } from 'react-router-dom'

type Challenge = {
  id: string
  title: string
  slug: string
  thumbnail: {
    src: string
    alt: string
  }
  github_link: string
  tags: string[]
}

function App() {
  const [challenges, setChallenges] = useState<Challenge[] | null>(null)

  useEffect(() => {
    async function fetchChallenges(path: string) {
      const response = await fetch(path)
      const data = await response.json()
      setChallenges(data.challenges)
    }
    fetchChallenges('./challenges.json')
  }, [])

  return (
    <>
      <section className="container">
        <h1 className="title">Frontend Mentor Challenges</h1>
        <p className="description">
          All my solutions to the challenges in Frontend Mentor, you can check
          the code at{' '}
          <a
            href="https://github.com/jonathan-eduardo/frontend-mentor/"
            target="_blank"
            className="link"
          >
            this repo
          </a>
        </p>
        <section className="cards">
          {challenges &&
            challenges.map((challenge: Challenge) => (
              <Card key={challenge.id} {...challenge} />
            ))}
        </section>
        <Outlet />
      </section>
    </>
  )
}

export default App
