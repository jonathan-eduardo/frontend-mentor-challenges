import styled from 'styled-components'
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'
import { useEffect, useState } from 'react'

type Question = {
  title: string
  answer: string
}

const QuestionContainer = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBackground};
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: none;
  background: transparent;
  cursor: pointer;
`

const QuestionTitle = styled.h3`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.question};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.highlightText};
  }
`

const QuestionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuestionAnswer = styled.p<{ $open: boolean }>`
  margin-top: 24px;
  display: ${(props) => (props.$open ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.body};

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.bodySmall};
  }
`

export default function Question({
  question,
  active,
}: {
  question: { title: string; answer: string }
  active?: boolean
}) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  useEffect(() => {
    if (active) setOpen(true)
  }, [active])

  return (
    <QuestionContainer>
      <QuestionButton onClick={handleClick}>
        <QuestionTitle>{question.title}</QuestionTitle>
        <QuestionIcon>{open ? <MinusIcon /> : <PlusIcon />}</QuestionIcon>
      </QuestionButton>
      <QuestionAnswer $open={open}>{question.answer}</QuestionAnswer>
    </QuestionContainer>
  )
}
