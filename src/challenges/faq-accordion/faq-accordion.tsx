import { useEffect, useState } from 'react'
import { theme } from './theme'
import styled, { ThemeProvider } from 'styled-components'
import data from './questions.json'
import Head from '../../helpers/head'
import Attribution from '../../components/attribution/attribution'
import Question from './components/question'
import StarIcon from './assets/images/icon-star.svg'
import bgDesktop from './assets/images/background-pattern-desktop.svg?url'

const BodyContainer = styled.main`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background: ${({ theme }) => theme.colors.primaryBackground};
  font-optical-sizing: auto;
  font-style: normal;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    width: 100%;
    height: 320px;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    position: fixed;
  }

  @media (max-width: 375px) {
    &::before {
      height: 232px;
    }
  }
`

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 16px;
  padding: 16px 12px;
  font-weight: 500;
  width: 100%;
`

const FAQCard = styled.div`
  max-width: 600px;
  width: calc(100% - 48px);
  padding: 40px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin: 168px 24px 48px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.05);
  z-index: 1;

  @media (max-width: 375px) {
    padding: 28px 24px;
    margin-top: 142px;
  }
`

const CardTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 16px;

  svg {
    margin-right: 24px;
  }

  @media (max-width: 375px) {
    font-size: 32px;
    margin-bottom: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const Questions = styled.section`
  display: flex;
  flex-direction: column;
`

type Question = {
  title: string
  answer: string
}

export default function FaqAccordion() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(data.questions)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head
        title="Frontend Mentor | FAQ accordion"
        description="FAQ accordion built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        ]}
      />
      <BodyContainer>
        <FAQCard>
          <CardTitle>
            <StarIcon />
            FAQs
          </CardTitle>
          <Questions>
            {questions &&
              questions.map((question, i) => (
                <Question
                  active={i === 0}
                  key={question.title}
                  question={question}
                />
              ))}
          </Questions>
        </FAQCard>
        <Footer>
          <Attribution challengeLink="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz" />
        </Footer>
      </BodyContainer>
    </ThemeProvider>
  )
}
