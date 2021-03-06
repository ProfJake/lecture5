/*json.js
Jake Levy
Sept 2020

simple demo of how to convert an object to a JSON string and back.
*/    var objStr = JSON.stringify({name:"Jake", age: 36});
    

    console.log("\nThis is how a stringified (JSON) object might look:")
    console.log(objStr);
    //prints {“name”

    console.log("\n\nThis is how a parsed JS object might look:")
    var nested = '{"cars":{"car1":"Ford", "car2":"bugatti"}}';

    var deString = JSON.parse(nested);

    console.log(deString);
    console.log();
