var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);

function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}

console.log(printTeacher("John", "Doe"));
