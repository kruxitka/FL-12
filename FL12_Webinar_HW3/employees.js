class Employee {
    static registry = [];
    static set EMPLOYEES(_val) {
        console.log(`don't edit me`)
    }
    static get EMPLOYEES() {
        return Employee.registry;
    }
    constructor(employee) {
        this.id = employee.id;
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.birthday = employee.birthday;
        this.salary = employee.salary;
        this.position = employee.position;
        this.department = employee.department;
        Employee.registry.push(this);
    }
    get age() {
        return parseInt(String((Date.now() - new Date(this.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    removeEmployee() {
        const index = Employee.registry.indexOf(this);
        if (index != -1) {
            Employee.registry.splice(index, 1);
        }
    }
    quit() {
        this.removeEmployee();
    }
    retire() {
        this.removeEmployee();
        console.log(`It was such a pleasure to work with you!`);
    }
    getFired() {
        this.removeEmployee();
        console.log(`Not a big deal!`);
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    getPromoted(benefits) {
        if (benefits.salary) { this.changeSalary(benefits.salary) }
        if (benefits.position) { this.changePosition(benefits.position) }
        if (benefits.department) { this.changeDepartment(benefits.department) }
        if (benefits.salary || benefits.position || benefits.department) { console.log('Yoohooo!') }
    }
    getDemoted(punishment) {
        if (punishment.salary) { this.changeSalary(punishment.salary) }
        if (punishment.position) { this.changePosition(punishment.position) }
        if (punishment.department) { this.changeDepartment(punishment.department) }
        if (punishment.salary || punishment.position || punishment.department) { console.log('Damn!') }
    }
}

class Manager extends Employee {
    constructor(employee) {
        super(employee);
        this.position = 'manager';
    }

    get managedEmloyees() {
        return Employee.EMPLOYEES.filter(empl => empl.department === this.department && empl.position !== 'manager')
    }
}

class BlueCollarWorker extends Employee {
}

class HRManager extends Manager {
    constructor(employee) {
        super(employee);
        this.department = 'hr';
    }
}

class SalesManager extends Manager {
    constructor(employee) {
        super(employee);
        this.department = 'sales';
    }
}

const salesManager = new SalesManager({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
});
const hrManager = new HRManager({
    id: 2,
    firstName: 'Bob',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
});
const blueCollarWorkerOne = new BlueCollarWorker({
    id: 3,
    firstName: 'Mary',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000,
    position: 'office worker',
    department: 'sales'
});
const blueCollarWorkerTwo = new BlueCollarWorker({
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000,
    position: 'office worker',
    department: 'hr'
});