import React from 'react';
import { Input } from "@material-tailwind/react";
import {Button} from "react-bootstrap";

const PasswordPage = () => {
    return (
        <div className="flex">
        <img
            className="h-screen object-cover flex-1 w-[60%] "
            src="/img/single-image.jpg"
            alt=""
        />
        <div className="h-screen px-4 flex justify-center space-y-3 flex-1 max-w-lg items-center flex-col">
            <form className="space-y-6 w-full max-w-xs" action="">
                <div className="">
                    <img
                        className="h-14 object-contain"
                        src="/img/logo-light.png"
                        alt=""
                    />
                    <p className="mt-4 mb-7 text-sm !font-light text-gray-600">
                        Réinitialisez le mot de passe de votre compte.
                    </p>
                </div>
                <p className="mt-4 mb-7 text-sm !font-light text-gray-600">
                    Entrez votre email et cliquez sur le bouton de confirmation pour
                    réinitialiser votre mot de passe. Nous vous enverrons un e-mail
                    détaillant les étapes pour terminer la procédure.
                </p>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email </label>
                </div>
                    < Button  type="submit" className=" rounded-full  rounded-pill btn btn-success"
                              size='sm' >
                    Confirmer
                </Button>
            </form>
        </div>
    </div>
    );
}

export default PasswordPage;
