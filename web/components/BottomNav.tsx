import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";



export default function SimpleBottomNavigation() 
{
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => 
                {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Search" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Appontments" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}
// sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}  elevation={3}
