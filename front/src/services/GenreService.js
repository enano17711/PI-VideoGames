import http from "../http-common";

const getAll = () => {
    return http.get("/genres");
};

const GenreService = {
    getAll
};

export default GenreService;