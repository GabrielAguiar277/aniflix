import wallpaper from "./wallpaper"
import "./style.css"

function Wallpaper(){
    return(
        <div className="wallpaper">
            <video autoPlay loop muted controls >
                <source src={wallpaper.video} type="video/mp4"/>
            </video>
            <div className="shadow"></div>
            <div className="display-card">
                <img src={wallpaper.img_url} className="logo-anime"/>
                <p className="sinopse">
                    {wallpaper.sinopse}
                </p>
                <div className="controller-button">
                    <button className="button assistir-button">
                    <svg className="svg assistir" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
                        Assistir
                    </button>
                    <button className="button exclama-button">
                    <svg className="svg exclama" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/></svg>
                        Ler mangá
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wallpaper