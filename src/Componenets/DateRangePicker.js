import { useEffect, useRef, useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarIcon } from "@heroicons/react/24/solid";
import fr from "date-fns/locale/fr";

const DateRangeComp = ({
                           range,
                           onChange,
                       }: {
    range: Range[];
    onChange: (ranges: RangeKeyDict) => void;
}) => {
    // open close
    const [open, setOpen] = useState(false);

    // get the target element to toggle
    const refOne = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    // hide dropdown on ESC press
    const hideOnEscape = (e: KeyboardEvent) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    // Hide on outside click
    const hideOnClickOutside = (e: MouseEvent) => {
        if (refOne.current && !refOne.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    return (
        <div className="calendarWrap relative">
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <CalendarIcon className="h-5 text-gray-500" />
                    </div>
                    <input
                        value={`${format(range[0].startDate as Date, "MM/dd/yyyy", {
                        locale: fr,
                        })}`}
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                        onClick={() => setOpen((open) => !open)}
                    />{" "}
                </div>
                <span>à</span>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <CalendarIcon className="h-5 text-gray-500" />
                    </div>
                    <input
                        value={` ${format(range[0].endDate as Date, "MM/dd/yyyy", {
                        locale: fr,
                        })}`}
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                        onClick={() => setOpen((open) => !open)}
                    />
                </div>
            </div>

            <div className="bg-white" ref={refOne}>
                {open && (
                    <DateRange
                        // @ts-ignore
                        onChange={onChange}
                        locale={fr}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        rangeColors={["#00935C"]}
                        months={1}
                        direction="horizontal"
                        className="!w-full calendarElement"
                    />
                )}
            </div>
        </div>
    );
};

export default DateRangeComp;
