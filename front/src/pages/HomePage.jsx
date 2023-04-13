import Header from "../components/Header.jsx";
import ListWrapper from "../components/wrappers/ListWrapper.jsx";
import ListHeader from "../components/ListHeader.jsx";
import Pagination from "../components/Pagination.jsx";
import {useSelector} from "react-redux";

const HomePage = () => {
    const loading = useSelector(state => state.games.loading)

    if (loading) {
        return (
            <p>Games cargando</p>
        )
    }

    return (
        <>
            <Header currentPage="GAMES" pageTitle="EXPLORE GAMES"/>
            <ListWrapper>
                <ListHeader/>
                <Pagination/>
            </ListWrapper>
        </>
    );
};

export default HomePage;