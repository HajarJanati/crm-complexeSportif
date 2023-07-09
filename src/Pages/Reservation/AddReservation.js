import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import AddUser from "../../Componenets/AddUser";
import AddReser from "../../Componenets/AddReser";
import UpdateReservation from "../../Componenets/UpdateReservation"
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";

const AddReservations = () => {
    const customStyles={
        headRow: {
            style: {
                backgroundColor: '#00935C',
                color: 'white',
            }
        },
        headCells: {
            style: {

            }
        },
        cells: {
            style: {
            },
        },

    };
    const columns =[
        {
            name: 'CLIENT',
            selector:row => row.client,
            sortable: true,

        },
        {
            name: 'TERRAIN',
            selector:row => row.venue,

        },
        {
            name: 'COMMERCER A',
            selector:row => row.commerce,
        },  
        {
            name: 'STATUS',
            cell: () => 'Confirmer',
        }, {
            name: 'OPTIONS',
            cell: () => (
                <div className="flex">
                    <PencilIcon
                        onClick={() => setShowUpdatebar(!showSidebar)}
                        className="h-6 cursor-pointer text-green-500"
                    />
                    <TrashIcon
                        className="h-6 cursor-pointer text-red-500"
                    />
                </div>
            ),
        },
    ]
    const data=[

        {
            id: 1,
            client: 'wafa',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',



        },
        {
            id: 2,
            client: 'radia',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',



        },
        {
            id: 3,
            client: 'mehdi',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',



        }, {
            id: 4,
            client: 'mohamed',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',



        },
    ]
    const [records,setRecords]=useState(data);
    function handelFilter(event){
        const newData=data.filter(row=>{
            return row.client.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUpdatebar, setShowUpdatebar] = useState(false);

    return(
        <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>
        <div className=" py-12 px-5 container mt-5 ">
            <div className="flex justify-between mb-3 items-center">
                <Button onClick={() => setShowSidebar(!showSidebar)} variant="success"  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <PlusIcon className="h-6 font-semibold shadow-sm " />
                        <span style={{ fontSize: '10px'  }}>NOUVEAU RESERVATION</span>
                    </div>
                </Button>
                <div>
                    <input style={{ borderBottom: '1px solid black'  }}  type="text" placeholder="Recherche" onChange={handelFilter}/>
                </div>
            </div>
            <DataTable
                columns={columns }
                className="border "
                data={records}
                customStyles={customStyles}
                pagination
            ></DataTable>

            <div style={{ display: 'flex', position: 'relative' }}>
                {showSidebar && (<AddReser/>)}

            </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                {showUpdatebar && (<UpdateReservation/>)}
            </div>

        </div>
        </main>
    )
}
export default AddReservations

