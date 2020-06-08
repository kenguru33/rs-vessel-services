import mongoos from 'mongoose'
import { app } from './app'

const start = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO URI must be defined')
    }
    try {
        await mongoos.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log('connected to mongodb')

    } catch (err) {
        console.log(err)
    }
    app.listen(3000, () => console.log('listen on 3000'))
}

start()
