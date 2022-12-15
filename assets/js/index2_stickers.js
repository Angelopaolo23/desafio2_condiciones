function sumar() {
  const primerInput = document.querySelector("#input1").value;
  const segundoInput = document.querySelector("#input2").value;
  const tercerInput = document.querySelector("#input3").value;
  const cantidadTotal = parseInt(primerInput) + parseInt(segundoInput) + parseInt(tercerInput);
  if (cantidadTotal == 0) {
    document.querySelector("#respuesta_cantidad").innerHTML = "No llevas ningun sticker, ingresa una cantidad de los que necesites si es que deseas comprar."
  } else if (cantidadTotal > 10) {
    document.querySelector("#respuesta_cantidad").innerHTML = "Llevas demasiados stickers, no tenemos tanto stock."
  } else{
    document.querySelector("#respuesta_cantidad").innerHTML = `Llevas un total de ${cantidadTotal} stickers.`
  }
  }
  





