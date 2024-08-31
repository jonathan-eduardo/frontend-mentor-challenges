import styled from 'styled-components'

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const Link = styled.a`
  padding: 16px;
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;
  font-weight: 700;

  &:active,
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.highlightColor};
    color: ${({ theme }) => theme.colors.primaryBackground};
  }
`

export default function Links({
  links,
}: {
  links: { label: string; url: string }[]
}) {
  return (
    <LinkContainer>
      {links.map((link) => (
        <Link key={link.label} href={link.url}>
          {link.label}
        </Link>
      ))}
    </LinkContainer>
  )
}
