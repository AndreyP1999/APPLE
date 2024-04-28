import { useLocation } from "react-router-dom";
import { Article } from "../../UI/Article";
import { MainCanvas } from "../MainCanvas";
import { Suspense, useEffect } from 'react';
import style from "./style.module.css";
import { useState } from "react";
export const MainContent = ({ text, path }) => {
    let location = useLocation();
    const [file, setFile] = useState("apple _watch/black.gltf");
    const [currentProducts, setCurrentProduucts] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fetch("/json/products.json")
            .then((res) => res.json())
            .then((data) => {
                setCurrentProduucts(data.iphone);
            });
    }, []);

    const changeFile = (currnetFile) => {
        const folder = location.state?.folder ?? "apple_watch";
        console.log(`${folder}/${currnetFile}`)
        setFile(`${folder}/${currnetFile}`);
    }

    useEffect(() => {
        const file = currentProducts[index]?.url ?? "black.gltf";

        changeFile(file)


    }, [index]);
    const handlerChangeFile = (e) => {
        const currnetFile = e.target.getAttribute("data-file")
        if (currnetFile) {
            changeFile(currnetFile)
        }
    };
    return (
        <>
            <article className={style.advert}>
                <Article
                    heading={<><b>The Perfect Moment</b> <br /> Between Past And <br />  Future.`</>}
                    href={'/'}
                    text={`Bye Now`}
                />
                <Suspense fallback={<></>}>
                    <MainCanvas file={file} />
                </Suspense>
            </article>
            <article className={style.bottomMenu}>
                <div className={style.listProducts}>
                    <button className={style.btn__arrow} onClick={() => { setIndex(index - 1 < 0 ? currentProducts.length - 1 : index - 1) }}>
                        <img className={style.iconsProd} src="/icons/arrowR.svg" alt="" />
                    </button>
                    <p> {index + 1}</p>
                    <button className={style.btn__arrow} onClick={() => { setIndex(index + 1 > currentProducts.length - 1 ? 0 : index + 1) }}>
                        <img className={style.iconsProd} src="/icons/arrowL.svg" alt="" />
                    </button>
                </div>
                <div onClick={handlerChangeFile} className={style.listcolors}>
                    {currentProducts.map((product) => (
                        <button data-file={product.url} key={product.url} className={style.btn__changeColor} style={{ background: product.color }}></button>
                    ))}

                </div>
            </article>

        </>
    )
}