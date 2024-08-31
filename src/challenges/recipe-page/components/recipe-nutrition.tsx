import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  margin-top: 12px;
  border-collapse: collapse;
`

const Row = styled.tr`
  line-height: 1.5rem;

  &:last-child td {
    border: none;
  }
`

const Data = styled.td`
  padding: 12px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    color: ${({ theme }) => theme.colors.highlightText};
    font-weight: 700;
  }
`

export default function RecipeNutrition({
  data,
}: {
  data: { label: string; value: string }[]
}) {
  return (
    <Table>
      <tbody>
        {data.map(({ label, value }) => (
          <Row key={label}>
            <Data>{label}</Data>
            <Data>{value}</Data>
          </Row>
        ))}
      </tbody>
    </Table>
  )
}
