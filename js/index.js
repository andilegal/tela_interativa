function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let h1 = document.querySelector("h1");

  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "img/sol-nascendo-circle.png";
    document.body.style.background = "#6c4445";
    h1.innerHTML = "Hora do dia";
  } else if (hora >= 12 && hora <= 18) {
    // Boa Tarde
    img.src = "img/tarde-cicle.png";
    document.body.style.background = "#3f577f";
    h1.innerHTML = "Hora da tarde";
  } else {
    //Boa Noite
    img.src = "img/noite-cicle.png";
    document.body.style.background = "#002f3d";
    h1.innerHTML = "Hora da noite";
  }
}
