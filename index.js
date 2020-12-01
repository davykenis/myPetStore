const pg = require('pg');
const { Client } = require('pg')
const client = new Client({
    user: 'admin123',
    host: 'pet-db.crqzoahfrtkk.eu-central-1.rds.amazonaws.com',
    database: 'pet-db',
    password: 'admin123',
    port: 5432,
});
client.connect();

exports.getPet = async (event) => {
    // TODO implement
    //pet name
    //pet id
    //pet type
    //pet age
    try {
        const result = await client.query("SELECT * FROM pets");
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.rows[0]),
        };
        return response;
    } catch (error) {
        console.error(error);
    }

    
};
exports.createPet = async (event) => {
    // TODO implement
    //pet name
    //pet id
    //pet type
    //pet age

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            id: "created",
            name: "vivaldi",
            type: "pandav2.3",
            age: 1
        }),
    };
    return response;
};
exports.deletePet = async (event) => {
    // TODO implement
    //pet name
    //pet id
    //pet type
    //pet age

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            id: "deleted",
            name: "vivaldi",
            type: "dead-pandav2.3",
            age: 42
        }),
    };
    return response;
};
