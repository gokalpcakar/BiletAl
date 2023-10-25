import { useState } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import SearchIcon from '@mui/icons-material/Search';
import styles from './style.module.css';

function SearchBar() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const { setSearchResults } = useSearchContext();

    const { data } = useQuery("events", getEvents);

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
        navigate("/");
    };

    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className={styles.searchWrapper}>
            <form className={styles.searchForm} onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Etkinlik veya sanatçı arayın" required style={{ boxShadow: 'none' }} value={searchQuery} onChange={onChangeHandler} />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
