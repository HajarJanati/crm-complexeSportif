
import React from "react";
import Input from "../../Componenets/Input";
import {
    EnvelopeIcon,
    KeyIcon,
    PencilIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@material-tailwind/react";

import MenuVertical from "../../Componenets/MenuVertical";


const EditPassword = () => {
    return (
        <main className="contents">
            <MenuVertical/>
            <div className=" pt-10 pl-28 bg-gray-100 ">
        <div className="px-6 py-10 lg:flex items-start gap-3">
            <div className="flex gap-3 py-3 px-3 mb-3 lg:mb-0 flex-1 max-w-sm items-center bg-white border shadow-sm">
                <img
                    className="h-16 object-contain"
                    // @ts-ignore
                    src="/img/default.png"
                    alt=""
                />
                <p className="flex flex-col gap-1">
                    <span className="text-xl font-semibold">JANATI Hajar</span>
                    <span className="text-sm text-gray-600">Admin</span>
                </p>
            </div>

            <form className=" bg-white border flex-1 shadow-sm py-3 px-3">

                <div className="pb-4 pt-2">
                    <h2 className="text-xl text-gray-800">Modifier le profil</h2>
                    <p className="text-sm text-gray-400 font-thin">
                        Modifier les informations générales de votre compte
                    </p>
                </div>

                <div className="border-y-2">
                    <div className="flex lg:justify-center">
                        <div className="relative mt-4">
                            <img
                                className="h-28 object-contain"
                                src= "/img/theme/default.png"
                                alt=""
                            />
                            <span className=" absolute bottom-0 right-0 flex items-center justify-center rounded-full border shadow-sm bg-gray-100 cursor-pointer h-7 w-7 ">
                <PencilIcon className="w-4 h-4 text-gray-700" />
              </span>
                        </div>
                    </div>
                    <h4 className="text-sm mt-6 font-semibold tracking-wide text-gray-700 ">
                        Informations personnelles
                    </h4>

                    <div className="space-y-3 py-5">
                        <div className="grid lg:grid-cols-2 gap-3">
                            <Input
                                Icon={UserCircleIcon}
                                label="Prénom"
                                name="name"
                                placeholder="Prénom"
                            />
                            <Input
                                Icon={UserCircleIcon}
                                name="surname"
                                label="Nom"
                                placeholder="Nom"
                            />
                        </div>
                        <Input
                            Icon={EnvelopeIcon}
                            label="Email"
                            readOnly
                            disabled
                            placeholder="email"
                        />
                        <h4 className="btn-dark"  >
                            Modifier le mot de passe
                        </h4>
                        <Input
                            Icon={KeyIcon}
                            label="Password Courant"
                            name="password_current"
                            placeholder="Password Courant"
                            type="password"
                        />
                        <Input
                            Icon={KeyIcon}
                            label="Mot de passe"
                            name="password"
                            placeholder="Mot de passe"
                            type="password"
                        />

                        <Input
                            Icon={KeyIcon}
                            type="password"
                            name="password_confirmation"
                            label="Confirmer mot de passe"
                            placeholder="Confirmer mot de passe"
                        />
                </div>
                </div>

                <Button
                    color="gray"
                    type="submit"
                    className="bg-gray-800 mt-4 float-right">
                    Sauvegarder
                </Button>
            </form>
        </div>
            </div>
        </main>
    );
}
    export default EditPassword;