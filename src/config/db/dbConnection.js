import mongoose from 'mongoose'

const uri = 'mongodb+srv://integration:integration@api-integration-vypeq.mongodb.net/integration?retryWrites=true&w=majority'
const parameters = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

try {
  await mongoose.connect(uri, parameters)
} catch (error) {
  console.log(error)
}
