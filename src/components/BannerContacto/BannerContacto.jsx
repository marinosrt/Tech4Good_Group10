import React from "react";
// import {Button } from './bannerContacto.style'

const BannerContacto = (props) => {
    return (
        <>
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h3>h3 {props.title}</h3>
                        <p className="lg:w-2/3 mx-auto">{props.text}</p>
                    </div>
                    <div className="text-center">
                        <button>{props.buttonText}</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerContacto;