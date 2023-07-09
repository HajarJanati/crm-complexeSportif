import React from 'react';
import NavbarHorizental from "../Componenets/NavbarHorizental";
import MenuVertical from "../Componenets/MenuVertical";

const Revues = () => {
    return (
        <>
            <main className="contents">
                <NavbarHorizental/>
                <MenuVertical/>
                <div className="py-12 px-5 container mt-5 ">
                    <h1 className="text-3xl 3xl:text-5xl uppercase text-center">
                        DEMANDEZ VOUS CLIENTS DE VOUS EVALUER SUR LA PLATEFORME CHI MATCH
                    </h1>
                    <div className="flex-1 flex items-center justify-center py-4" >
                        <img
                            className="h-96 w-96 3xl:h-[570px] 3xl:w-[570px] mx-auto object-contain"
                            // @ts-ignore
                            src="/img/revue.svg"
                            alt=""
                        />
                    </div>
                </div></main>
        </>
    );
}

export default Revues;
