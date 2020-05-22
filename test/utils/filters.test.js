import { dealsWon } from '../../src/utils/filters'
import chai from 'chai'

const expect = chai.expect

const mockData = {
  data: [
    { id: 1, status: 'won'},
    { id: 2, status: 'delete'}
  ]
}

describe('# Test Filter Status', ()=> {
  it('Should filter by status is won', () => {
    const data = mockData.data.filter(dealsWon)
    expect(data[0].id).to.equal(1)
  })
})