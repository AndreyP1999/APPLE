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

    
    const changeFile = (currnetFile) => {
        const folder = location.state?.folder ?? "apple _watch";
        console.log(`${folder}/${currnetFile}`)
        setFile(`${folder}/${currnetFile}`);
    }

    useEffect(() => {
        fetch("/json/products.json")
            .then((res) => res.json())
            .then((data) => {
                setCurrentProduucts(data.iphone);
            });
    }, []);

    useEffect(() => {
        changeFile("black.gltf")
    }, [location]);


    const handlerChangeFile = (e) => {
        const currnetFile = e.target.getAttribute("data-file")
        if (currnetFile) {
            changeFile(currnetFile)
        }
    };
    return (
        <>
            <section className={style.advert}>
                <Article
                    heading={<><b>The Perfect Moment</b> <br /> Between Past And <br />  Future.`</>}
                    href={'/'}
                    text={`Bye Now`}
                />
                <Suspense fallback={<></>}>
                    <MainCanvas file={file} />
                </Suspense>
            </section>
            <section className={style.bottomMenu}>
                <div className={style.listProducts}>
                    <button>
                        <img className={style.iconsProd} src="/icons/arrowR.svg" alt="" />
                    </button>
                    <p> 1</p>
                    <button>
                        <img className={style.iconsProd} src="/icons/arrowL.svg" alt="" />
                    </button>
                </div>
                <div onClick={handlerChangeFile} className={style.listcolors}>
                    {currentProducts.map((product) => (
                        <button data-file={product.url} key={product.url} className={style.btn__changeColor} style={{ background: product.color }}></button>
                    ))}

                </div>
            </section>

        </>
    )
}