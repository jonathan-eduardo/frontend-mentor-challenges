import { ReactNode } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 400;
  line-height: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 40px 0 24px;

  @media (max-width: 375px) {
    font-size: 36px;
    line-height: 2.25rem;
  }
`

export default function RecipeTitle({ children }: { children: ReactNode }) {
  return <Title>{children}</Title>
}
