import style from "./style.module.css";
function LoadingCommponents() {
    return (
        <div id="root"  className={style.container}>
            <h1 className={style.title}>loading...</h1>
            <p className={style.subtitle} >The 3d model is loaded because it is 2k it may take time.</p>
        </div>
    );
}

export default LoadingCommponents;