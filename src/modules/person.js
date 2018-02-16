function Person(name, config) {
    this.name = name;
    this.config = config;
}
Person.prototype.getFullName = function () {
    return this.name;
};
// exports.Person = Person;
// exports.myName = "anuj is my name";

module.exports = {
    Person: Person,
    myName: 'my name is anuj'
}