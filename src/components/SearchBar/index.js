import { useState } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`
    },
}));

function SearchBar() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const { setSearchResults,data } = useSearchContext();
    
  

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const results = data.filter((event) => {
            return (
                event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setSearchResults(results);
        setSearchQuery("");
        
    };

    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <Search onSubmit={onSubmitHandler}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={onChangeHandler}
                style={{ width: '100%' }}
            />
        </Search>
    );
}

export default SearchBar;
