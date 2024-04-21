const fs = require('fs');

export const table = (x: number)=> {
    console.log("=========================");
    console.log("       Tabla del 5");
    console.log("=========================");

    var response =""
    for (let i = 1; i <= 10; i++) {
        
        response += `${x} x ${i} = ${x*i} \n`
        console.log(response)
        
        fs.writeFileSync('./outputs/tabla-5.txt', response);    
    }
    
    

    
}