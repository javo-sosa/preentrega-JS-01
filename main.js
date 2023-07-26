const Envio = 1500;
const Precio = 4600;
let stock = 16;
const Importe = ( a , b , c ) => {
    return a * b + c;
};

let respUno = prompt("Bienvenidos a VERDE, desea comprar un producto?");
while (respUno != "si" && respUno != "no") {
    alert("Por favor ingrese una respuesta adecuada");
    respUno = prompt("Bienvenidos a VERDE, desea comprar un producto?");
}
if (respUno === "si") {
    alert("Muy bien!!! Continuemos");
    let cantidad = Number(prompt("Cuántas unidades desea adquirir"));
    if (cantidad > 0 && cantidad <= stock){
        stock = stock - cantidad
        let respDos = prompt("Necesita que se lo enviemos?");
        if (respDos === "si"){
            let total = Importe (Precio , cantidad , Envio);
            let domicilio = prompt ("Por favor ingrese su domicilio");
            alert(`El valor de su pedido es de $ ${total}, y será enviado a la siguiente dirección ${domicilio}. Gracias por su compra!`);
        } else if (respDos === "no") {
            let total = Importe (Precio , cantidad , 0);
            alert(`El valor de su pedido es de $ ${total}, y puede retirarlo por nuestra sucursal a partir del siguiente día hábil. Gracias por su compra!`);
        }else {
            alert("Por favor ingrese una respuesta adecuada");
            respDos = prompt("Necesita que se lo enviemos?");   
            if (respDos === "si"){
                let total = Importe (Precio , cantidad , Envio);
                let domicilio = prompt ("Por favor ingrese su domicilio");
                alert(`El valor de su pedido es de $ ${total}, y será enviado a la siguiente dirección ${domicilio}. Gracias por su compra!`);
            } else if(respDos === "no") {
                let total = Importe (Precio , cantidad , 0);
                alert(`El valor de su pedido es de $ ${total}, y puede retirarlo por nuestra sucursal a partir del siguiente día hábil`);
            }  
        }
    } else {
        alert ("Lo sentimos, no disponemos de esa cantidad, nuestras unidades disponibles son"+ " " + stock + ". Por favor intente nuevamente");
    }
} else if (respUno === "no"){
    alert("Gracias por su visita!!!");
}