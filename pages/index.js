import Button from '@/components/Button'
import { styled } from 'stitches.config'
import { useStore } from 'hooks'

export default function Home() {
  const toggleTheme = useStore(state => state.toggleTheme)
  return (
    <Container>
      <Button type="primary" size="sm">
        Button
      </Button>
      <ThemeToggle onClick={toggleTheme}>Temayı değiştir</ThemeToggle>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  gap: 10,
})

const ThemeToggle = styled('button', {
  p: 12,
})
