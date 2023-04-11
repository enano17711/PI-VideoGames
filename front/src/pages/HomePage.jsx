import Header from "../components/Header.jsx";
import ListWrapper from "../components/wrappers/ListWrapper.jsx";
import ListHeader from "../components/ListHeader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {retrieveGames} from "../slices/games.js";
import Pagination from "../components/Pagination.jsx";
import {retrieveGenres} from "../slices/genres.js";


const HomePage = () => {
    const games = useSelector(state => state.games)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(retrieveGames())
    }, [dispatch])

    const initGenres = useCallback(() => {
        dispatch(retrieveGenres())
    }, [dispatch])

    useEffect(() => {
        initFetch()
        initGenres()
    }, [initFetch, initGenres])

    return (
        <>
            <Header currentPage="GAMES" pageTitle="EXPLORE GAMES"/>
            <ListWrapper>
                <ListHeader genres={genres}/>
                <Pagination games={games}/>
            </ListWrapper>
        </>
    );
};

export default HomePage;