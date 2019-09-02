var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function s9Logged(constructorFn) {
    console.log('*** constructrFn ', constructorFn);
}
var S9Person = /** @class */ (function () {
    function S9Person() {
        console.log('*** hi! ');
    }
    S9Person = __decorate([
        s9Logged
    ], S9Person);
    return S9Person;
}());
// Factory
function s9Logging(value) {
    return value ? s9Logged : null;
}
var S9Car = /** @class */ (function () {
    function S9Car() {
    }
    S9Car = __decorate([
        s9Logging(true)
    ], S9Car);
    return S9Car;
}());
// Advanced
function s9Printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log('*** s9Printable this =  ', this);
    };
}
var S9Plant = /** @class */ (function () {
    function S9Plant() {
        this.name = 'Green Plant';
    }
    S9Plant = __decorate([
        s9Logging(true),
        s9Printable
    ], S9Plant);
    return S9Plant;
}());
var s9Plant = new S9Plant();
s9Plant.print();
// Method Decorator
// Property Decorator
function s9Editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function s9Overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var S9Project = /** @class */ (function () {
    function S9Project(name) {
        this.projectName = name;
    }
    S9Project.prototype.calcBudget = function () {
        console.log('*** calcBudget = ', 1000);
    };
    __decorate([
        s9Overwritable(false)
    ], S9Project.prototype, "projectName", void 0);
    __decorate([
        s9Editable(true)
    ], S9Project.prototype, "calcBudget", null);
    return S9Project;
}());
var s9Project = new S9Project('Super Project');
s9Project.calcBudget();
s9Project.calcBudget = function () {
    console.log('*** calcBudget new = ', 2000);
};
s9Project.calcBudget();
console.log('*** s9Project ', s9Project);
// parameter decorator
function s9PrintInfo(target, methodName, paramIndex) {
    console.log('*** Target: ', target);
    console.log('*** methodName: ', methodName);
    console.log('*** paramIndex: ', paramIndex);
}
var S9Course = /** @class */ (function () {
    function S9Course(name) {
        this.name = name;
    }
    S9Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log('*** printAll ', 10000);
        }
        else {
            console.log('***  ', 2000);
        }
    };
    __decorate([
        __param(1, s9PrintInfo)
    ], S9Course.prototype, "printStudentNumbers", null);
    return S9Course;
}());
var s9Course = new S9Course('s9 bubub');
s9Course.printStudentNumbers('bubub', true);
s9Course.printStudentNumbers('bubub', false);
