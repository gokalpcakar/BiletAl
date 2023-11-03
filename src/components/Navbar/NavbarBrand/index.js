import {
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo2.png"
import { useSearchContext } from "../../../context/SearchContext";

const NavbarBrand = () => {

    const { setSearchResults, data } = useSearchContext();

    const handleClick = () => {
        setSearchResults(data);
    };

    return (
        <>
            <Link to="/" onClick={handleClick}>
                <Box
                    component="img"
                    sx={{
                        height: 60,
                    }}
                    alt="Your logo."
                    src={logo}
                />
            </Link>
        </>
    );
};
export default NavbarBrand;