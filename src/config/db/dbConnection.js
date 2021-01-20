import mongoose from 'mongoose'

const uri = ''
const parameters = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

try {
  await mongoose.connect(uri, parameters)
} catch (error) {
  console.log(error)
}
