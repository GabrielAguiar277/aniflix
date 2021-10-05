// import death from "../../videos/death.mp4"
// import name from "../../videos/name.mp4"
import demon from "../../videos/demon.mp4"
// import deathPng from "../../img/death.png"
// import namePng from "../../img/name.png"
import demonPng from "../../img/demon.png"

const wallpaperList = [
    // {
    //     title: "Death Note",
    //     img_url: deathPng,
    //     video: death,
    //     sinopse: `
    //                 Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note,
    //                 que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome
    //                 do alvo em uma de suas páginas.
    //             `
    // },

    // {
    //     title: "Your Name",
    //     img_url: namePng,
    //     video: name,
    //     sinopse: `
    //                 Mitsuha é a filha do prefeito de uma pequena cidade,
    //                 mas sonha em tentar a sorte em Tóquio. Taki trabalha
    //                 em um restaurante em Tóquio e deseja largar o seu emprego.
    //                 Os dois não se conhecem, mas estão conectados pelas imagens
    //                 de seus sonhos.
    //             `
    // },
    {
        title: "Demon Slayer",
        img_url: demonPng,
        video: demon,
        sinopse: `
                    Uma família é atacada por demônios e apenas dois membros sobrevivem
                     - Tanjiro e sua irmã Nezuko, que está se transformando em um demônio 
                    lentamente. Tanjiro pretende se tornar um matador de demônios para vingar
                    sua família e curar sua irmã.
                `
    }
]

const wallpaper = wallpaperList[Math.floor(Math.random() * wallpaperList.length)]

export default wallpaper