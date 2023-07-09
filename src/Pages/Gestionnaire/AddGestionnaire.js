import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import AddUser from "../../Componenets/AddUser";
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import UpdateGestionnaire from "../../Componenets/UpdateGestionnaire";
import axios from "axios";
const AddGestionnaire = () => {
    const [Data,setData]=useState([])
    const GetUserData = () =>{
        //get all employee data
        axios.get('/users/getUser')
            .then(response => {
                const result = response.data;

                setData(result)
                console.log(result)
            })


    }
    useEffect(() => {
        GetUserData();},[])
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
            selector:row => row.prenom,
            sortable: true,

        },
        {
            name: 'NOM',
            selector:row => row.name,
            sortable: true,


        },
        {
            name: 'EMAIL',
            selector:row => row.email,
            sortable: true,

        },  {
            name: 'TELEPHONE',
            selector:row => row.phone,
            sortable: true,

        },
        {
            name: 'PASSWORD',
            selector:row => row.provider,
            sortable: true,


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

    const [records,setRecords]=useState(Data);
    function handelFilter(event){
        const newData=Data.filter(row=>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
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
                            <PlusIcon className="h-6 font-semibold shadow-sm " />
                            <span span style={{ fontSize: '10px'  }}>NOUVEAU GESTIONNAIRE</span>
                        </div>

                    </Button>
                    <div>
                        <input style={{ borderBottom: '1px solid black'  }}  type="text" placeholder="Recherche" onChange={handelFilter}/>
                    </div>
                </div>


                        <DataTable
                            columns={columns}
                            className="border"
                            data={Data}
                            customStyles={customStyles}
                            pagination
                        ></DataTable>
            </div>

            <div style={{ display: 'flex', position: 'relative' }}>
                        {showSidebar && (<AddUser/>)}

            </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                {showUpdatebar && (<UpdateGestionnaire/>)}
            </div>
        </main>
    )
}
export default AddGestionnaire

