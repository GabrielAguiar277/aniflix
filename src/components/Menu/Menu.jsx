import { useState } from "react";
import Profile from "../Profile";
import "./style.css"

function Menu(){

    const [menu, setMenu] = useState(false)

    const changeBackground = ()=>{
        if(window.scrollY > 0){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <header className={menu ? 'menu active' : 'menu'}>
            <div className="mainMenu">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="277" viewBox="0 0 1024 277" fill="none" className="logo">
                        <g clipPath="url(#clip0)">
                        <path d="M140.803 258.904C125.399 261.609 109.724 262.42 93.509 264.58L98.5 166L63 175L47.5 269.5C32.096 271.121 14.594 274.58 0 276.742L44.051 0H77.5255H111L81.5 53L77.5255 0H140.803V258.904ZM208 98.374V113L193.5 35L220.5 0L286.5 179V0H321.5V244H276L214 92L221.5 251L182.692 255.39V0H220.5L198 35L208 57.5V82.5V98.374ZM418.356 43.242V242.15C403.762 242.15 389.168 242.15 375.117 242.689V43.242V-2L418.356 0V43.242ZM533.484 98.374H592.671V141.614H533.484V239.718H491.051V0H611.859V43.241H533.484V98.374ZM682.125 201.881C706.719 202.42 731.581 204.315 755.635 205.664V248.365C716.989 245.931 678.342 243.502 638.885 242.689V0H682.125V201.881ZM792.119 251.338C805.902 252.15 820.496 252.961 834.549 254.58V0H792.119V251.338ZM1024 0L969.137 131.615L1024 276.742C1007.78 274.58 991.568 271.607 975.352 268.904L944.274 188.91L912.657 262.42C896.979 259.715 881.845 258.904 866.173 256.742L921.845 129.992L871.576 0H918.058L946.435 72.699L976.705 0H1024Z" fill="#1F7FD8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="1024" height="276.742" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Séries</a></li>
                    <li><a href="#">Filmes</a></li>
                    <li><a href="#">Bombando</a></li>
                    <li><a href="#">Minha lista</a></li>
                </ul>

                <div className="responsiveMenu">
                    Navegue <svg className="svg ani" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" role="img" viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/></svg>
                </div>
            </div>
            
            <div className="userMenu">
                <ul>
                    <li>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
                    </li>
                    <li><a href="#">Infantil</a></li>
                    <li>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" viewBox="0 0 448 512"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/></svg>
                    </li>
                </ul>
                    <Profile/>
 
            </div>
 
        </header>
    )
}

export default Menu;