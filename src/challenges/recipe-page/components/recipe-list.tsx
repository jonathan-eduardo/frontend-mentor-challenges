import styled from 'styled-components'

type RecipeListProps = {
  label?: string
  value: string
  accent?: boolean
}

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ListItem = styled.li<{ $accent?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: 400;
  line-height: 1.5rem;
  margin-left: 18px;
  padding-left: 20px;

  &::marker {
    font-variant-numeric: ordinal;
    color: ${({ theme, $accent }) =>
      $accent ? theme.colors.accentText : theme.colors.highlightText};
    font-weight: 700;
  }
`

export default function List({
  items,
  ordered,
}: {
  items: RecipeListProps[]
  ordered?: boolean
}) {
  return (
    <ListContainer as={ordered ? 'ol' : 'ul'}>
      {items.map((item, i) => {
        return (
          <ListItem key={i} $accent={item.accent}>
            {item.label && <strong>{item.label}:</strong>} {item.value}
          </ListItem>
        )
      })}
    </ListContainer>
  )
}
