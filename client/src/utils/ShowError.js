import {enqueueSnackbar} from "notistack";

export default (error)=>{
  console.log("Error object:", error);
  enqueueSnackbar(error.response.data.error,{variant:"error"});
}

  

