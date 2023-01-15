import React, { useEffect } from "react";

import FilterInput from "../components/FilterInput";
import ColorList from "../components/List";
import PagePagination from "../components/pagination";
import { useAppDispatch } from "../redux/hooks";
import { productQuery } from "../redux/operation/operation";
import { useSearchParams } from "react-router-dom"
import { Box } from "@mui/material";


const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1", id: "" })
    const currentPage = parseInt(searchParams.get("page")!)
    const filterParams = searchParams.get("id")
    const toUpdatePage = (pageNumber: number) => {
        setSearchParams({ "page": pageNumber.toString() })
    }
    const toUpdateFilter = (id: string) => {
        setSearchParams({ "id": id })
    }

    useEffect(() => {
        dispatch(productQuery({ page: currentPage, id: filterParams }))
    }, [currentPage, dispatch, filterParams])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <FilterInput onChange={toUpdateFilter} />
            <ColorList />
            <PagePagination onChange={toUpdatePage} currentPage={currentPage} />

        </Box>
    );
}

export default MainPage;