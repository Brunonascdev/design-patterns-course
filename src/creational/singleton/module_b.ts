import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const mydb = MyDatabaseClassic.getInstance();

mydb.add({
  name: 'Robert',
  age: 30,
});
mydb.add({
  name: 'Edward',
  age: 30,
});

mydb.show();
