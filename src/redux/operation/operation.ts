import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://reqres.in/api"

export const productQuery = createAsyncThunk(
  "products", async (page: object, thunkAPI) => {
    const params = {per_page: 5,  ...page }   
      try {
        const { data, status } = await axios.get('/product', { params: { ...params } }) 
        if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
        return data
      } catch (error: any) {
        console.log(error.message);
        toast.warning("Item not found")
        return thunkAPI.rejectWithValue(error.message);
      }
    }
)