import React, {useState} from 'react';
import Card from "../Card"
import "./style.css"

function Row({title, categoria}){

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = 40 * 200
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) -100
        }
        setScrollX(x)
    }

    return(
        <div className="row">
            <h2 className="genderTitle">{title}</h2>
            <div className="arrowLeft" onClick={handleLeftArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" viewBox="0 0 320 512"><path fill="white" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>
            </div>
            <div className="arrowRight" onClick={handleRightArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" viewBox="0 0 320 512"><path fill="white" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </div>

            <div className="rowBody--listarea">
                <div className="rowBody" style={{
                    marginLeft : scrollX,
                    width : 40 * 200
                }}>
                
                {console.log(`cate : ${categoria.lenght}`)}

                {categoria.map(anime => (
                    <Card img_url = {anime.image_url} key={anime.mal_id}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Row