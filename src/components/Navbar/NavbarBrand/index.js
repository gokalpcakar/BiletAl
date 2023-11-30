import {
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import biletLogo from "../../../assets/images/biletLogo.jpeg"
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
                        height: 70,
                    }}
                    alt="Your logo."
                    src={biletLogo}
                />
            </Link>
        </>
    );
};
export default NavbarBrand;