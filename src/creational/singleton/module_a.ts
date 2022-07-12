import { MyDatabaseFunction } from './db/my-database-function';

const mydb = MyDatabaseFunction;

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

export { mydb };
