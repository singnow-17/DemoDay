import { useRef } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import config from './config.json'
import './Carrossel.css'

export default function Carrossel() {
    const carrossel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;



    }

    const handleRigthClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return (
        <>
            <div id="bares">
                <button onClick={handleLeftClick}>
                    <AiOutlineDoubleLeft />
                </button>
                <div id="carrossel" ref={carrossel}>
                    {config.map((item) => {
                        return (
                            <div className="item">
                                <img className="imagem" width="70%" src={item.thumb} />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1>{item.nome}</h1>
                                    <span>Descrição: {item.description}</span>
                                    <span>Distância: {item.distancia}</span>
                                    <span>Seguidores: {item.seguidores}</span>
                                    <span>Seguindo: {item.seguindo}</span>
                                    <button>Ver parceiro</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={handleRigthClick}>
                    <AiOutlineDoubleRight />
                </button>
            </div>


        </>
    );
}