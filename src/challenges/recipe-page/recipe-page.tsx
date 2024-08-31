import Attribution from '../../components/attribution/attribution'
import Head from '../../helpers/head'
import styled, { ThemeProvider } from 'styled-components'
import RecipeImageSrc from './assets/images/image-omelette.jpeg'
import { theme } from './theme'
import RecipeImage from './components/recipe-image'
import RecipeTitle from './components/recipe-title'
import RecipeDescription from './components/recipe-description'
import PreparationTime from './components/preparation-time'
import List from './components/recipe-list'
import RecipeNutrition from './components/recipe-nutrition'

const BodyContainer = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-optical-sizing: auto;
  font-style: normal;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const RecipeContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  max-width: 736px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin: 122px 0 124px;

  @media (max-width: 375px) {
    margin: 0;
    border-radius: 0;
  }
`

const RecipeContent = styled.div`
  padding: 0 40px 40px;

  @media (max-width: 375px) {
    padding: 0 32px 40px;
  }
`

const RecipeSection = styled.section`
  margin-top: 30px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 32px;
  }
`

const Footer = styled.footer`
  line-height: 16px;
  padding: 16px 12px;
`

const Subtitle = styled.h1`
  font-family: 'Young Serif', serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.75rem;
  margin-bottom: 24px;
  color: hsl(14, 45%, 36%);
`

export default function RecipePage() {
  const preparationTimes = [
    { label: 'Total', value: 'Approximately 10 minutes', accent: true },
    { label: 'Preparation', value: '5 minutes', accent: true },
    { label: 'Cooking', value: '5 minutes', accent: true },
  ]

  const instructions = [
    {
      label: 'Beat the eggs',
      value:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      label: 'Heat the pan',
      value:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      label: 'Cook the omelette',
      value:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      label: 'Add fillings (optional)',
      value:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      label: 'Fold and serve',
      value:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      label: 'Enjoy',
      value: 'Serve hot, with additional salt and pepper if needed.',
    },
  ]

  const nutritionData = [
    { label: 'Calories', value: '277kcal' },
    { label: 'Carbs', value: '0g' },
    { label: 'Protein', value: '20g' },
    { label: 'Fat', value: '22g' },
  ]

  const ingredients = [
    { value: '2-3 large eggs' },
    { value: 'Salt, to taste' },
    { value: 'Pepper, to taste' },
    { value: '1 tablespoon of butter or oil' },
    {
      value: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Head
        title="Frontend Mentor | Recipe page"
        description="Recipe page built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Young+Serif&display=swap',
          'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
        ]}
      />

      <BodyContainer>
        <RecipeContainer>
          <RecipeImage
            src={RecipeImageSrc}
            alt="Picture of an omelette on a white plate"
          />
          <RecipeContent>
            <RecipeTitle>Simple Omelette Recipe</RecipeTitle>
            <RecipeDescription>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </RecipeDescription>
            <PreparationTime times={preparationTimes} />
            <RecipeSection>
              <Subtitle>Ingredients</Subtitle>
              <List items={ingredients} />
            </RecipeSection>
            <RecipeSection>
              <Subtitle>Instructions</Subtitle>
              <List items={instructions} ordered />
            </RecipeSection>
            <RecipeSection>
              <Subtitle>Nutrition</Subtitle>
              <RecipeDescription>
                The table below shows nutritional values per serving without the
                additional fillings.
              </RecipeDescription>
              <RecipeNutrition data={nutritionData} />
            </RecipeSection>
          </RecipeContent>
        </RecipeContainer>

        <Footer>
          <Attribution challengeLink="https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm" />
        </Footer>
      </BodyContainer>
    </ThemeProvider>
  )
}
