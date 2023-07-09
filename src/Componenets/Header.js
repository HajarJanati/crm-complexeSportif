import { Typography, Box, useTheme } from "@mui/material";


const Header = ({ title, subtitle }) => {

    return (
        <Box >
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography  fontWeight="bold" variant="h7"  >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;