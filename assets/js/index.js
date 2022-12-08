fotografiaGato = document.querySelector("#foto_gato")
fotografiaGato.style.height = "600px"

const agregarBorde = () => {
    if (fotografiaGato.style.border == '2px solid red') {
        fotografiaGato.style.border = '0px'
    }
    else {
        fotografiaGato.style.border = '2px solid red'
    }
}

fotografiaGato.addEventListener('click', agregarBorde)

