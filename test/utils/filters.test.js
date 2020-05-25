import { dealsWon } from '../../src/utils/filters'
import chai from 'chai'

const expect = chai.expect

const mockData = {
  data: [
    { data: {
       status: 'won',
     }}
  ]
}

describe('# Test Filter Status', ()=> {
  it('Should filter by status is won', () => {
    const data = mockData.data.filter(dealsWon)
    expect(mockData.data[0].data.status).to.equal('won')
  })
})