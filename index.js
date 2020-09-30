exports.handler = async (event) => {
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
