import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import Sidbar from "../../Componenets/Sidbar";
import  UpdateClient from "../../Componenets/UpdateClient";
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";

import axios from "axios";

const AddClients = () => {
    const [Data,setData]=useState([])
    const GetClientsData = () =>{
        //get all employee data
        axios.get('/clients/all')
            .then(response => {
                const result = response.data;

                setData(result)
                console.log(result)
            })


    }
    useEffect(() => {
        GetClientsData();},[])

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
            name: 'PRENOM',
            selector:row => row.firstName,
            sortable: true,

        },
        {
            name: 'NOM',
            selector:row => row.lastName,
            sortable: true,


        },
        {
            name: 'CIN',
            selector:row => row.CIN,
            sortable: true,

        },  {
            name: 'TELEPHONE',
            selector:row => row.phone,
            sortable: true,

        },{
            name: 'SOURCE',
            cell: () => 'Local',
        },
        {
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

 function handelFilter(event){
     const newData=Data.filter(row=>{
         return row.firstName.toLowerCase().includes(event.target.value.toLowerCase())
     })
     setData(newData)
 }
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUpdatebar, setShowUpdatebar] = useState(false);




    return(
        <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>
            <div className="py-12 px-5 container mt-5 ">
            <div className="flex justify-between mb-4 items-center">
                <Button  onClick={() => setShowSidebar(!showSidebar)} variant="success"  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PlusIcon className="h-8 font-semibold shadow-sm " />
                    <span span style={{ fontSize: '10px'  }}>NOUVEAU CLIENT</span>
                    </div>

                </Button>
            <div>
                <input style={{ borderBottom: '1px solid black'  }}  type="text" placeholder="Recherche" onChange={handelFilter}/>
            </div>
            </div>
            <DataTable
                columns={columns }
                className="border "
                data={Data}
                customStyles={customStyles}
                pagination
            ></DataTable>
        </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                {showSidebar && (<Sidbar/>)}
            </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                {showUpdatebar && (<UpdateClient/>)}
            </div>
        </main>
    )
}
export default AddClients

