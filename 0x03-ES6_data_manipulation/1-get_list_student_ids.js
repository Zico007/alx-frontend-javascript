function getListStudentIds(list) {
    if (!Array.isArray(list)) {
        return [];
    }

    return list.map(student => student.id);
}

// Test
const students = [
    {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco'
    },
    {
        id: 2,
        firstName: 'James',
        location: 'Columbia'
    },
    {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco'
    }
];

console.log(getListStudentIds(students)); // Expected output: [1, 2, 5]
console.log(getListStudentIds('Not an array')); // Expected output: []
