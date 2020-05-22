import mongoose , { Schema } from 'mongoose'

const uri = 'mongodb+srv://integration:integration@api-integration-vypeq.mongodb.net/test?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
 
const sampleSchema = new Schema({
  rowTest : { type: String, required: true}
})

const Sample = mongoose.model('Sample', sampleSchema)

describe('#Teste Database Connection', () => {
  before('Should connection with mongodb database atlas', (done) => {
    mongoose.connect(uri, options)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection fail'))
    db.once('open', () => { return })
    done()
  })

  
describe('Create Document', () => {
  it('Should create document on mongo atlas database', (done) => {
    let sample = Sample({ rowTest: 'row ok!'})
    sample.save(done()) 
  })
})

describe('Read Document', () => {
  it('Should search and read rows on database', (done) => {
    Sample.findOne({rowTest: 'row ok!'}, (err) => {
      if (err) return console.log(err)
    })
    done()
  })
})

describe('Update Document', () => {
  it('Should update rows on database', (done) => {
    let query = { rowTest: 'row ok!' }
    Sample.findOneAndUpdate(
      query,
      { $set: { rowTest: 'new row'}},
      done())
    })
})

describe('Delete Document', () => {
  it('Should delete rows on database', (done) => {
    let query = { rowTest: 'new row' }
    Sample.findOneAndDelete(query, done())
  })
})

after((done) => {
  mongoose.close(done())
})

})
