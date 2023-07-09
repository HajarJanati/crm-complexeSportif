import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {XMarkIcon} from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Button} from "@material-tailwind/react";
import {PlusIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
];
const terrains = [
    { id: 1, name: 'olimpico' },
    { id: 2, name: 'Bernabeau' },
    { id: 3, name: 'SanSiro' },
];


function AddReser() {


    const [client, setClient] = useState(null);
    const [terrain, setTerrain] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());


    function handleClientChange(event) {
        setClient(clients.find(client => client.id === parseInt(event.target.value)));
    }
    function handleTerrainChange(event) {
        setTerrain(terrains.find(client => terrain.id === parseInt(event.target.value)));
    }

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    const [isOpen, setIsOpen] = useState(true);

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
                    MODIFIER  UNE RESERVATION
                </h2>


                <XMarkIcon className="h-6 w-6 cursor-pointer text-black "
                           onClick={handleCloseSidebar}
                />
            </div>
            <hr className="border-t-2 border-gray-500 my-4" />

            <form className="space-y-4">
                <div>
                    <label htmlFor="client" className="form-label">Client</label>
                    <div className="flex items-center gap-2">
                        <select id="client" className="form-select" onChange={handleClientChange}>
                            <option value="">Choisir un client</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                        <Link to="/client">
                            <Button
                                color="gray"
                                className="flex bg-gray-800 items-center gap-2">
                                <PlusIcon className="h-4 font-semibold shadow-sm text-green-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="terrain" className="form-label">Terrains</label>
                    <select id="terrain" className="form-select" onChange={handleTerrainChange}>
                        <option value="">Choisir un terrain</option>
                        {terrains.map(terrain => (
                            <option key={terrain.id} value={terrain.id}>{terrain.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="choisit la date" className="form-label">Commencer à</label>
                    <div className="d-flex align-items-center">
                        <DatePicker
                            id="date"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy HH:mm"
                            showTimeInput
                        />
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-5" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Modifier Réservation</button>
                </div>                    </form>
        </div>
    );
}

export default AddReser;
