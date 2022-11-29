document.querySelector("#registrar").addEventListener("click", registrar);
const userName = document.querySelector("#nombre");
const carga = document.querySelector(".loading")

function registrar(registro) {
    registro = userName.value;

    console.log (registro)

    localStorage.setItem("userName", registro)
}
let player = localStorage.getItem("userName");

    let bienvenida = document.createElement("h2");

    bienvenida.innerHTML = `Bienvenido: <bold>${player}</bold>`

    document.body.prepend(bienvenida);


    setTimeout(function(){
        carga.classList.add("loaded")

    }, 500)







