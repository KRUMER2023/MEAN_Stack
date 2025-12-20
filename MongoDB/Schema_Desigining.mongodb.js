db.createCollection( “faculty” , {
	validator: {
		$jsonSchema : {
			bsonType : “object”,
			required : [“name”, “age”, “major”, “salary”, “role”, “customId”],
			properties: {
	name : { bsontype : “string” },
	age : { bsontype : “int”, minimum : 18 },
	major : { bsontype : “string” },
	salary : { bsontype : “int”, minimum : 0 },
role : { bsontype : “string” },
customId : { bsontype : “string” }
}
}
},
validationLevel : “moderate”
})
