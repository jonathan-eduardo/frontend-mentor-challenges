import styled from 'styled-components'

const AttributionContainer = styled.div`
  font-size: 11px;
  text-align: center;
`

const AttributionLink = styled.a`
  color: hsl(228, 45%, 44%);
`

export default function Attribution({
  challengeLink,
}: {
  challengeLink: string
}) {
  return (
    <AttributionContainer>
      Challenge by{' '}
      <AttributionLink href={challengeLink} target="_blank">
        Frontend Mentor
      </AttributionLink>
      . Coded by{' '}
      <AttributionLink
        href="https://github.com/jonathan-eduardo"
        target="_blank"
      >
        Jonathan Silva
      </AttributionLink>
      .
    </AttributionContainer>
  )
}
