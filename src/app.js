let body = document.querySelector("body")

let header = document.createElement("header")
let imgLogo = document.createElement("img")
let main = document.createElement("main")
let mainSection = document.createElement("section")

imgLogo.classList.add("logo_site")
main.classList.add("main__container")
mainSection.classList.add("main__container__main")
imgLogo.src = "./src/assets/logo.svg"

body.append(header, main)
header.appendChild(imgLogo)
main.appendChild(mainSection)

let noticia = document.createElement("section")
let ul = document.createElement("ul")
noticia.classList.add("main__news")

main.appendChild(noticia)
noticia.appendChild(ul)

let footer = document.createElement("footer")
let footerTexto = document.createElement("p")

footerTexto.innerText = "Kenzie News | Todos os direitos reservados"

body.appendChild(footer)
footer.appendChild(footerTexto)

async function dataNoticias(){
    const data = await fetch("https://kenzie-news-api.herokuapp.com/api/news/")
    const finalData = data.json()
    return finalData
} 

const noticias = await dataNoticias()

function renderizarNoticiaPrincipal(elem){    
    let mainDivImg = document.createElement("div")
    let mainImg = document.createElement("img")
    let mainFonte = document.createElement("p")
    let mainDiv = document.createElement("div")
    let mainCategoria = document.createElement("span")
    let mainTexto = document.createElement("h1")
    let mainResumo = document.createElement("p")
    let mainFonteDesktop = document.createElement("p")

    mainDivImg.classList.add("main__container__div__imagem")
    mainImg.classList.add("main__container__imagem")
    mainFonte.classList.add("main__container__fonte")
    mainDiv.classList.add("main__container__div")
    mainCategoria.classList.add("main__container__categoria")
    mainResumo.classList.add("main__container__resumo")
    mainFonteDesktop.classList.add("main__container__fonteDesktop")

    mainImg.src                = `${elem.imagem}`
    mainFonte.innerText        = `${elem.fonte}`
    mainCategoria.innerText    = `${elem.categoria}`
    mainTexto.innerText        = `${elem.titulo}`
    mainResumo.innerText       = `${elem.resumo}`
    mainFonteDesktop.innerText = `${elem.fonte}`
    
    mainSection.append(mainDivImg, mainDiv)
    mainDivImg.append(mainImg, mainFonte)
    mainDiv.append(mainCategoria, mainTexto, mainResumo, mainFonteDesktop)
}

renderizarNoticiaPrincipal(noticias[1])

function renderizarNoticias(arr){
    const novaNoticia = arr.map((elem) => {      
        let artigo = document.createElement("li")
        let noticiaDiv = document.createElement("div")
        let noticiaImg = document.createElement("img")
        let noticiaDivInfo = document.createElement("div")
        let noticiaCategoria = document.createElement("span")
        let noticiaTitulo = document.createElement("h4")
        let noticiaTexto = document.createElement("p")
        let noticiaFonte = document.createElement("p")

        artigo.classList.add("main__container__news")
        noticiaDiv.classList.add("main__container__news__div")
        noticiaImg.classList.add("main__container__news__imagem")
        noticiaDivInfo.classList.add("main__container__news__divinfo")
        noticiaCategoria.classList.add("main__container__news__categoria")
        noticiaTitulo.classList.add("main__container__news__titulo")
        noticiaTexto.classList.add("main__container__news__texto")
        noticiaFonte.classList.add("main__container__news__fonte")
        noticiaImg.src = `${elem.imagem}`
        noticiaCategoria.innerText = `${elem.categoria}`
        noticiaTitulo.innerText = `${elem.titulo}`
        noticiaTexto.innerText = `${elem.resumo}`
        noticiaFonte.innerText = `Fonte: ${elem.fonte}`

        noticia.appendChild(ul)
        ul.appendChild(artigo)
        artigo.append(noticiaDiv, noticiaDivInfo)
        noticiaDiv.appendChild(noticiaImg)
        noticiaDivInfo.append(noticiaCategoria, noticiaTitulo, noticiaTexto, noticiaFonte)
    })

    return novaNoticia
}
renderizarNoticias(noticias)