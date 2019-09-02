var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 44;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log('*** person age = ', this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('*** person type = ', this.type);
    };
    return Person;
}());
var s5Person = new Person('bububu', 'BUBUBU');
console.log('*** person ', s5Person);
s5Person.printAge();
//person.setType('hell '); // Won'this.work with private method;
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = 'Max';
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.age = 34;
        return _this;
        // console.log('*** type ', this.type);
    }
    return Max;
}(Person));
var max = new Max('mini max');
console.log('*** max ', max);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log('*** get ', plant.species);
plant.species = 'AB';
console.log('*** get ', plant.species);
plant.species = 'Green Plant';
console.log('*** get ', plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log('*** 2 * PI ', 2 * Helpers.PI);
console.log('*** diameter ', Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
// private constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log('*** right.name ', right.name);
right.name = 'Something else';
