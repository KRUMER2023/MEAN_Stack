// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Practicals");

// Find a document in a collection.


// db.employees.insertOne(
//     {
//         "id" : 1,
//         "name" : "John",
//         "age" : 30,
//         "role" : "Manager"
//     }
// )

db.employees.find( { age: { $gt: 25, $lt: 35 } })
