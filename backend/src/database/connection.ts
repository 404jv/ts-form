import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('📦 Sucessefully connected to database.'))
  .catch((err) => console.log(err));
