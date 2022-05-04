import { render, screen } from '@testing-library/react'
import App from '../pages/index'
import renderer from 'react-test-renderer'

describe('Index Page render 📓', () => {
  it('Match snapshot 📷', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should contain a Button 🟢', () => {
    render(<App />)
    const input = screen.getByText('Go to Contacts')
    expect(input).toBeInTheDocument()
  })
})
