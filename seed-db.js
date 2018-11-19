const mongoose = require('mongoose');
const Lorem = require('lorem-ipsum');
const db = require('./models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kudos_db', { useNewUrlParser: true });

function randomPick(myArray) {
    return randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}

const departments = ['HR', 'IT', 'Marketing', 'Executive'];
db.Employee.insertMany([
    {
        employee_id: "0001",
        name: "Jim",
        department: randomPick(departments)
    },
    {
        employee_id: "0002",
        name: "Mr Mister",
        department: randomPick(departments)
    },
    {
        employee_id: "0003",
        name: "Bob",
        department: randomPick(departments)
    },
    {
        employee_id: "0004",
        name: "Billy the Kid",
        department: randomPick(departments)
    },
    {
        employee_id: "0005",
        name: "Theodore Roosevelt",
        department: randomPick(departments)
    },
    {
        employee_id: "0006",
        name: "Throgdor the Burninator",
        department: randomPick(departments)
    },
]).then(function(response) {
    let kudosList = []
    for(let i = 0; i < 15; i++) {
        kudosList.push({
            title: Lorem(6, 'words'),
            body: Lorem(3, 'sentences'),
            employeeTo: randomPick(response)._id,
            employeeFrom: randomPick(response)._id
        })
    }
    db.Kudos.insertMany(kudosList);
});