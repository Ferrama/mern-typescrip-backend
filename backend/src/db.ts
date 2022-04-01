import mongoose from 'mongoose'
import config from './config'

(async ()=> {
    try {
   const db =  await mongoose.connect(`mongodb://${config.MONGO_HOSTNAME}/${config.MONGO_DATABASE}`);
    console.log('database connected', db.connection.name);
    } catch (err) {
        console.error(err);
    }
})();