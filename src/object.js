"use strict";
exports.__esModule = true;
// importação de interface para tipagem de nossos objetos
var PersonA = {
    name: 'John',
    age: 22,
    occupation: 'Developer',
    gender: 'Male'
};
// Objeto persona A
var PersonB = {
    name: 'Kath',
    age: 25,
    occupation: 'Product Manager',
    gender: 'Female'
};
// Objeto persona B
var AllPersons = [PersonA, PersonB];
// array compondo 2 objetos e interface compondo array
exports["default"] = AllPersons;
// exportando array por padrão em nosso arquivo
