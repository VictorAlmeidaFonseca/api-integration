import chai from 'chai'
import chaiHttp from 'chai-http'

const expect = chai.expect
chai.use(chaiHttp)

describe('Pipedrive endpoin test', () => {
  it('Should return http status 200 and message "success"', () => {
    chai.request(`http://localhost:3500`)
      .get('/mock')
       .end((err, response)  => {
         expect(response).to.have.status(200)
         expect(response.body.success).to.be.true
      })
  })
})