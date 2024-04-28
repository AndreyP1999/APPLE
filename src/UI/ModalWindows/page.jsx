import style from "./style.module.css";
function ModalWindows({ children, setIsModalOpen }) {
    return (
        <article className={style.page}>
            <div className={style.page__content}>
                {children}
                <button className={style.page__close} onClick={()=>{setIsModalOpen(false)}}>close</button>
            </div>
        </article>
    );
}

export default ModalWindows;