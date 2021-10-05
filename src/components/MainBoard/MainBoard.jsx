import React, {useState, useEffect} from 'react';
import Row from "../Row"
import "./style.css"

function MainBoard(){

    // const [movieList, setMoveList] = useState([])

    // useEffect(()=>{
    //     const loadAll = async () => {
    //         let list = await Jikan.getHomeList()
    //         setMoveList(list)
    //     }

    //     loadAll()
    // }, [])


    const [topAnime, setTopAnime] = useState([])
    const [topAnimeSoon, setTopAnimeSoon] = useState([])
    const [animeLonga, setAnimeLonga] = useState([])
    
    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json())

        setTopAnime(temp.top.slice(0, 40))
    }

    useEffect(() => {
        GetTopAnime()
        
        console.log("top animes")
    }, [])

    console.log(topAnime)

    
    const GetTopAnimeWeek = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then(res => res.json())

        setTopAnimeSoon(temp.top.slice(0,40))
    }

    useEffect(() => {
        GetTopAnimeWeek()
    }, [])

    const GetAnimeLonga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/movie`)
        .then(res => res.json())

        setAnimeLonga(temp.top.slice(0,40))
    }

    useEffect(() => {
        GetAnimeLonga()
    }, [])

    // console.log(topAnimeWeek)

    // return(
    //     <div className="mainBoard">
    //         <div className="boardRows">
                
    //             {movieList.map((item, key) =>(
    //                 <Row key={key} title={item.title} items={item.items.top}/>
    //             ))}
    //         </div>
    //     </div>
    // )
    return(
        <div className="mainBoard">
            <div className="boardRows">
                <div className="rowsArea">
                    <Row title="Top animes mais assistidos" categoria={topAnime}/>
                    <Row title="Filmes" categoria={animeLonga}/>
                    <Row title="Em breve" categoria={topAnimeSoon}/>
                </div>
            </div>
        </div>
    )
}

export default MainBoard