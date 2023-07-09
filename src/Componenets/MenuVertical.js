import React from "react";
import {
    Tooltip,
} from "@material-tailwind/react";
const MenuVertical = () => {
    return (
        <div className="my-auto fixed top-0">
            <div className=" h-screen sticky min-w-[70px] px-2 py-5 flex flex-col bg-white border-r">
                <ul className="flex-1 flex flex-col justify-around items-center">
                    <li>
                        <Tooltip placement="bottom" content="terrain">
                        <a href="/terrain" >
                            <img  src="../icons/soccer-field.png" class="h-7 object-contain" alt="   "/>
                        </a>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="bottom" content="Gestionnaire">
                        <a href="/Gestionnaire">
                            <img src="../icons/gest.png" className="h-7 object-contain" alt="   "/>
                        </a>
                        </Tooltip>
                    </li>
                    <li >
                        <Tooltip placement="bottom" content="client">
                        <a href="/client" >
                            <img  src="../icons/clients.png"  class="h-7 object-contain" alt="   "/>
                        </a>
                        </Tooltip>
                    </li><li >
                    <Tooltip placement="bottom" content="réservation">
                    <a href="/reservation" >
                        <img  src="../icons/reservation.png" class="h-7 object-contain" alt="   "/>
                    </a>
                    </Tooltip>
                </li><li >
                    <Tooltip placement="bottom" content="calendrie">
                    <a href="/calendrie" >
                        <img  src="../icons/calendar.png" class="h-7 object-contain" alt="   "/>
                    </a>
                    </Tooltip>
                </li><li >
                    <Tooltip placement="bottom" content="Statistique">
                    <a href="/statistique" >
                        <img  src="../icons/graph.png"class="h-7 object-contain"  alt="   "/>
                    </a>
                    </Tooltip>
                </li>
                    <li>
                        <Tooltip placement="bottom" content="Revue">
                        <a href="/revue">
                            <img src="../icons/review.png" className="h-7 object-contain" alt="   "/>
                        </a>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="bottom" content="Abonnements">
                        <a href="/abonnements">
                            <img src="../icons/money.png" className="h-7 object-contain" alt="   "/>
                        </a>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default MenuVertical;
