exports.getPet = async (event) => {
    // TODO implement
    //pet name
    //pet id
    //pet type
    //pet age

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            id: "sqfqsdqsdf54654",
            name: "Jos",
            type: "panda",
            age: 2
        }),
    };
    return response;
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
