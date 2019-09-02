function s9Logged (constructorFn: Function) {
  console.log('*** constructrFn ', constructorFn);
}

@s9Logged
class S9Person {
  constructor() {
    console.log('*** hi! ');
  }
}

// Factory
function s9Logging( value: boolean): any  {
  return value ? s9Logged : null;
}

@s9Logging(true)
class S9Car {}

// Advanced
function s9Printable(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log('*** s9Printable this =  ', this);
  }
}

@s9Logging(true )
@s9Printable
class S9Plant {
  name = 'Green Plant';
}

const s9Plant = new S9Plant();
(<any>s9Plant).print();

// Method Decorator
// Property Decorator
function s9Editable(value: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function s9Overwritable(value: boolean) {
  return function (target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    
    return newDescriptor;
  }
}

class S9Project {
  @s9Overwritable(false)
  projectName: string;
  
  constructor(name: string) {
    this.projectName = name;
  }
  
  @s9Editable(true)
  calcBudget() {
    console.log('*** calcBudget = ', 1000);
  }
}

const s9Project = new S9Project('Super Project');
s9Project.calcBudget();
s9Project.calcBudget = function () {
console.log('*** calcBudget new = ',  2000);
};
s9Project.calcBudget();
console.log('*** s9Project ', s9Project);

// parameter decorator
function s9PrintInfo(target: any,  methodName: string, paramIndex: number) {
  console.log('*** Target: ', target);
  console.log('*** methodName: ', methodName);
  console.log('*** paramIndex: ', paramIndex);
}

class S9Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  printStudentNumbers(mode: string, @s9PrintInfo printAll: boolean) {
    if (printAll) {
      console.log('*** printAll ', 10000);
    } else {
      console.log('***  ', 2000);
    }
  }
}

const s9Course = new S9Course('s9 bubub');
s9Course.printStudentNumbers('bubub', true);
s9Course.printStudentNumbers('bubub', false);
