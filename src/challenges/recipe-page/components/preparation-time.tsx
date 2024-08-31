import styled from 'styled-components'
import List from './recipe-list'

const Box = styled.div`
  background: ${({ theme }) => theme.colors.accentBackground};
  border-radius: ${({ theme }) => theme.borderRadius.secondary};

  padding: 26px 26px 30px;
  margin-top: 32px;
`

const Title = styled.h3`
  font-size: 20px;
  line-height: 1.25rem;
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentText};
`

export default function PreparationTime({
  times,
}: {
  times: { label: string; value: string }[]
}) {
  return (
    <Box>
      <Title>Preparation Time</Title>
      <List items={times} />
    </Box>
  )
}
