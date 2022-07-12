import { MyDatabaseClassic } from './db/my-database-classic';

const mydb = MyDatabaseClassic.getInstance();

mydb.add({
  name: 'John',
  age: 30,
});
mydb.add({
  name: 'Maria',
  age: 30,
});
mydb.add({
  name: 'Edu',
  age: 30,
});
