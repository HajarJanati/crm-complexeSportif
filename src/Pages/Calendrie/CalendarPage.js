import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import AddReser from "../../Componenets/AddReser";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";


const locales = {

    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 23),
    },
    {
        title: "Vacation",
        start: new Date(2023, 4, 7),
        end: new Date(2023, 4, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 23),
    },
];
function CalendarPage() {
    const [forceOpen, setForceOpen] = useState(false);

    const onSelectEvent = (e: any) => {
        console.log(e);
        // setValue("title", e.title);
        // setValue("startDate", timestampToDatetimeInputString(e.start.getTime()));
        // setValue("endDate", timestampToDatetimeInputString(e.end.getTime()));
        // setForceOpen(true);
    };
    const [showSidebar, setShowSidebar] = useState(false);

    return(
        <>  <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>

                <div className="py-12 px-5 container mt-5 ">
                    <div className="flex justify-between mb-3 items-center">
                        <Button onClick={() => setShowSidebar(!showSidebar)} variant="success"  >
                            <div style={{ display: 'flex', alignItems: 'center' }}>

                                <PlusIcon className="h-6 font-semibold shadow-sm " />
                                <span span style={{ fontSize: '10px'  }}>NOUVEAU Reservation</span>
                            </div>
                        </Button>
                    </div>
                <Calendar
                    localizer={localizer}
                    selectable
                    messages={{
                        month: "Mois",
                        week: "Semaine",
                        day: "Jour",
                        today: "Aujourd'hui",
                        next: "Suivant",
                        previous: "Arrière",
                        tomorrow: "Demain",
                        yesterday: "Hier",
                    }}
                    onSelectEvent={onSelectEvent}
                    // onSelectSlot={onSelectSlot}
                    culture="fr"
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{color:"green",
                        height: "90vh" }}
                />
                    <div style={{ display: 'flex', position: 'relative' }}>
                        {showSidebar && (<AddReser/>)}

                    </div>

            </div>

        </main>
        </>
    );
}

export default CalendarPage;