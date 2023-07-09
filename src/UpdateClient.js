import React, { useState } from 'react';
import {XMarkIcon} from "@heroicons/react/20/solid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function UpdateClient({row ,  GetClientsData }) {

  
    const [firstNam,setfirstName]=useState("");
    const [lastNam,setlastName]=useState("");
    const [address,setaddresse]=useState("");
    const [email,seteemail]=useState("");
    const [phon,setphone]=useState("");
    const [isOpen, setIsOpen] = useState(true);
  

    
    const handelSubmit = async (event) =>{
        
        const firstName =  firstNam || row.firstName;
        const  lastName = lastNam || row.lastName;
        const phone = phon || row.phone;
        const  addresse = address || row.addresse;
        const  Email = email || row.Email;

        event.preventDefault();

        try {
                const response = await axios.patch(`/clients/update/${row._id}`, { firstName,lastName , phone,addresse,Email});
                if (response.status === 200) {
                    handleCloseSidebar();
                    toast.success(`Mise a jour des informations de <<${row.CIN}>> avec succès !`);
                    GetClientsData();
                    console.log(response.data);
                   


                } else {
                    toast.error(response.status);
                }
            } catch (error) {
                toast.error("Une erreur s'est produite lors de la Mise a jour des information.");
            }

        
    }


    const handleCloseSidebar = () => {
        setIsOpen(false);

    };

    if (!isOpen) {
        return null; // Retourne null si le Sidebar n'est pas ouvert
    }
    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-200 p-8 overflow-y-scroll">
            <div className="flex my-4 items-center justify-between">
                <h2 className="text-gray-800  font-medium text-sm">
                    Modifier UN CLIENT
                </h2>

                <XMarkIcon className="h-6 w-6 cursor-pointer text-black "
                           onClick={handleCloseSidebar}
                />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <hr className="border-t-2 border-gray-500 my-4" />

            <form className="space-y-4" onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="nom" className="block font-medium text-gray-700">Nom :</label>
                    <input type="text" id="nom" name="nom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" defaultValue={row.lastName}  onChange={(event) => {
                        setlastName(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="Prénom" className="block font-medium text-gray-700">Prénom:</label>
                    <input type="text" id="prenom" name="prenom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" defaultValue ={row.firstName}  onChange={(event) => {
                        setfirstName(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">Email :</label>
                    <input type="text" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"defaultValue={row.Email} onChange={(event) => {
                        seteemail(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="CIN" className="block font-medium text-gray-700">N° Catre d'identité :</label>
                    
                    <input type="text" id="CIN" name="CIN" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={row.CIN} />
                </div>

                <div>
                    <label htmlFor="adresse" className="block font-medium text-gray-700">Adresse :</label>
                    <input type="text" id="adresse" name="adresse" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"defaultValue={row.addresse} onChange={(event) => {
                        setaddresse(event.target.value);
                    }}/>
                </div>

                <div>
                    <label htmlFor="telephone" className="block font-medium text-gray-700">Téléphone :</label>
                    <input type="text" id="telephone" name="telephone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"defaultValue={row.phone} onChange={(event) => {
                        setphone(event.target.value);
                    }}/>
                </div>

                {/* Ajouter d'autres champs ici */}

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-black ">Modifie Client</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateClient;
