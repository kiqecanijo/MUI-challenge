import Contacts from '../pages/contacts'
import renderer from 'react-test-renderer'
import { mockData } from '../utils/extra'

describe('Contacts Page render 📓', () => {
  it('Match snapshot 📷', () => {
    const tree = renderer.create(<Contacts data={mockData} query={{}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
