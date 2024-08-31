import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 40px 40px 0;

  @media (max-width: 375px) {
    padding: 0;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};

  @media (max-width: 375px) {
    border-radius: 0;
  }
`

export default function RecipeImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <Wrapper>
      <Image src={src} alt={alt} loading="lazy" />
    </Wrapper>
  )
}
