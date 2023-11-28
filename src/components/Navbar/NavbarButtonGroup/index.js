import { Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarButtonGroup() {
    const isSmallScreen = useMediaQuery('(max-width:1250px)');

    return (
        <div style={{display:"flex", flexWrap:"nowrap"}}>
            <Button sx={{
                marginLeft: "10px",
                backgroundColor: "#7BD8C0",
                color: "#034f84",
                "&:hover": {
                    border: '1px solid #7BD8C0',
                    color: '#7BD8C0',
                    transition: '.5s',
                    backgroundColor: '#034f84'
                },
                ...(isSmallScreen && {
                    fontSize: '10px', 
                    padding: '10px 5px', 
                    marginLeft:"3px",
                    fontWeight:"500",
                })
            }} component={Link} to="/signin" variant="contained">
                Giriş Yap
            </Button>
            <Button sx={{
                marginLeft: "10px",
                backgroundColor: "#7BD8C0",
                color: "#034f84",
                transition: '.5s',
                "&:hover": {
                    border: '1px solid #7BD8C0',
                    color: '#7BD8C0',
                    backgroundColor: '#034f84'
                },
                ...(isSmallScreen && {
                    fontSize: '10px', 
                    padding: '10px 5px',  
                    marginLeft:"3px",
                    fontWeight:"500",
                })
            }} component={Link} to="/signup" variant="contained">
                Kaydol
            </Button>
        </div>
    )
}

export default NavbarButtonGroup;
