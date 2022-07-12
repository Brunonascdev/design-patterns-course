import { MyDatabaseFunction } from './db/my-database-function';
import { mydb as mydbfromA } from './module_a';

const mydb = MyDatabaseFunction;

mydb.add({
  name: 'Robert',
  age: 30,
});
mydb.add({
  name: 'Edward',
  age: 30,
});

mydb.show();

console.log(mydb === mydbfromA);
