import { useState } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
// import SearchIcon from '@mui/icons-material/Search';
// import styles from './style.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '24ch',
    },
    [theme.breakpoints.down('lg')]: {
        marginLeft: theme.spacing(1),
        marginLeft: 'auto',
        width: '100%'
    }
}));

const SearchIconWrapper = styled('button')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    color: '#fff'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: { width: '100%' }
    },
}));

function SearchBar() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const { setSearchResults } = useSearchContext();

    const { data } = useQuery("events", getEvents);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const results = data.filter((event) => {
            return (
                event.name.toLowerCase() == (searchQuery.toLowerCase()) ||
                event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setSearchResults(results);
        setSearchQuery("");
        navigate("/");
    };

    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        // <div className={styles.searchWrapper}>
        //     <form className={styles.searchForm} onSubmit={onSubmitHandler}>
        //         <input type="text" placeholder="Etkinlik veya sanatçı arayın" required style={{ boxShadow: 'none' }} value={searchQuery} onChange={onChangeHandler} />
        //         <button type="submit">
        //             <SearchIcon />
        //         </button>
        //     </form>
        // </div>
        <Search onSubmit={onSubmitHandler}>
            <SearchIconWrapper type="submit">
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onInput={onChangeHandler}
            />
        </Search>
    );
}

export default SearchBar;
