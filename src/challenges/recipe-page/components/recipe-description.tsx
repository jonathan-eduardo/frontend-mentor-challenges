import { ReactNode } from 'react'
import styled from 'styled-components'

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: 1.5rem;
  font-weight: 400;
`

export default function RecipeDescription({
  children,
}: {
  children: ReactNode
}) {
  return <Description>{children}</Description>
}
