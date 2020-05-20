import mongoose from 'mongoose'

const uri = 'mongodb+srv://integration:integration@api-integration-vypeq.mongodb.net/test?retryWrites=true&w=majority'
const parameters = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

describe('Teste Database Connection', () => {
  it('Should connection with mongodb database atlas', async () => {
    try {
      await mongoose.connect(uri, parameters)
      mongoose
        .connection
        .on('open', () => console.log('Connected!'))
    } catch (error) {
      console.log(erro)
    }
  })
})
