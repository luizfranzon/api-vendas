import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.error('Error connecting to database.');
  });
