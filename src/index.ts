const string:string = 'Zhenya loh!';
alert(string);

interface PersonInterface {
  name: string,
  surName: string,
  age: number,
  job: string,
}

class Person implements PersonInterface {
  name: string;
  surName: string;
  age: number;
  job: string;
  constructor(name: string, surName: string, age: number, job: string) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.job = job;
  };
  greeting(): void {
    alert(`YO, my name is ${this.name} ${this.surName}, I work as a ${this.job} and Zhenya is loh!!!`);
  }
}

const Andrew = new Person('Andrew', 'Sikera', 22, 'tuneyadec');

Andrew.greeting();