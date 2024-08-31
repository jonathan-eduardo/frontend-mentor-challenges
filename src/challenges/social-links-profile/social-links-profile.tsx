import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Attribution from '../../components/attribution/attribution'
import avatarImageSrc from './assets/images/avatar-jessica.jpeg'
import Head from '../../helpers/head'
import Links from './components/links'

const BodyContainer = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-optical-sizing: auto;
  font-style: normal;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Card = styled.div`
  flex-basis: 384px;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: 0.875rem;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 24px;

  @media (max-width: 375px) {
    padding: 24px;
  }
`

const Avatar = styled.img`
  max-height: 90px;
  max-width: 90px;
  border-radius: 50%;
  margin-bottom: 26px;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: 1.5rem;
  font-weight: 600;
  margin-bottom: 14px;
`

const Location = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlightColor};
  margin-bottom: 30px;
`

const Description = styled.p`
  font-weight: 400;
  margin-bottom: 26px;
`

const Footer = styled.footer`
  color: hsl(0, 0%, 100%);
  line-height: 16px;
  padding: 16px 12px;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export default function SocialLinksProfile() {
  const links = [
    { label: 'GitHub', url: '#' },
    { label: 'Frontend Mentor', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Twitter', url: '#' },
    { label: 'Instagram', url: '#' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Head
        title="Frontend Mentor | Social Links Profile"
        description="Social Links Profile built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
        ]}
      />

      <BodyContainer>
        <Card>
          <Avatar src={avatarImageSrc} />
          <Title>Jessica Randall</Title>
          <Location>London, United Kingdom</Location>
          <Description>"Front-end developer and avid reader."</Description>
          <Links links={links} />
        </Card>

        <Footer>
          <Attribution challengeLink="https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm" />
        </Footer>
      </BodyContainer>
    </ThemeProvider>
  )
}
