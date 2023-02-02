import mongoose from 'mongoose';
import 'dotenv/config';

const mongoURI = process.env.DB_URL;
console.log(mongoURI);
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DB');
  })
  .catch((err) => {
    console.log('CONNECTION TO DB FAILED!');
    console.log(err);
  });
