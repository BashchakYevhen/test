import { Pagination, PaginationItem, } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAppSelector } from "../redux/hooks";
import React from "react"
interface IProps {
    onChange: Function,
    currentPage: number,
}



const PagePagination: React.FC<IProps> = ({ onChange, currentPage }) => {
    const { totalPage } = useAppSelector(state => state.product);
    const handleChange = (event: React.ChangeEvent<unknown>,
        page: number) => {
        onChange(page)
    }



    return (
        <Pagination
            onChange={handleChange}
            count={totalPage}
            page={currentPage}
            renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item} variant="outlined"
                />
            )}
        />
    )
}
export default PagePagination