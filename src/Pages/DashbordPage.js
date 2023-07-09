import { Box, Button, IconButton, Typography } from "@mui/material";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import NavbarHorizental from "../Componenets/NavbarHorizental";
import MenuVertical from "../Componenets/MenuVertical";
import LineChart from "../Componenets/LineChart";
import PieChart from "../Componenets/PieChart";
import Header from "../Componenets/Header";
import StatBox from "../Componenets/StatBox";
import React from "react";
const DashboardPage = () => {



    return (
        <main className="contents ">

            <NavbarHorizental/>
            <MenuVertical/>
            <div className="py-12 px-5 container mt-5  ">

            <Box m="20px">
            {/* HEADER */}


                <Box display="flex" justifyContent="space-between" alignItems="center"  sx={{ m: "0 0 15px 0" }}>
                <Header title="" subtitle="Welcome to your dashboard" />

                <Box >
                    <Button
                        sx={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "20px 30px",
                            backgroundColor: "#3f9d57",
                            color: "#ffffff"
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    sx={{ backgroundColor: "rgb(248 250 252)"}}
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{color:"#3f9d57" ,fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{ backgroundColor: "rgb(248 250 252)"}}
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Nbr des réservation"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color:"#3f9d57", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{ backgroundColor: "rgb(248 250 252)"}}
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="32,441"
                        subtitle="Nbr des clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color:"#3f9d57" ,fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{ backgroundColor: "rgb(248 250 252)"}}
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Chiffre d'affaires"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{ color:"#3f9d57", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 7"
                    gridRow="span 2"
                    sx={{ backgroundColor: "rgb(248 250 252)"}}

                >
                    <Box
                        mt="5px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                fontWeight="200"
                                sx={{ color:"#000000" }}>
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ color:"#000000" }}>

                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color:"#3f9d57" }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart />
                    </Box>
                </Box>
                    <Box
                        gridColumn="span 5"
                        gridRow="span 2"
                        sx={{ backgroundColor: "rgb(248 250 252)"}}
                        overflow="auto"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            p="20px"
                        >
                        </Box>
                        <Box height="200px" m="-15px -15px 0 0 ">
                            <PieChart />
                        </Box>
                    </Box>
            </Box>
            </Box>
            </div>


</main>
    );
}

export default DashboardPage;