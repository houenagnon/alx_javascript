#!/usr/bin/node

let globalVariable = "Welcome";


function outer(){
    alert(globalVariable);

    const course = "Holberton";

    function inner(){
        alert(globalVariable.concat(" ").concat(course));
        const exclamation = "!";

        function inception(){
            alert(globalVariable.concat(" ").concat(course).concat(exclamation));
        }

        inception();
    }

    inner();
}

outer();