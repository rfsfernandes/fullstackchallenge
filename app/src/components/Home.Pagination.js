import React from "react";
import Pagination from '@material-ui/lab/Pagination';



function CustomPagination(props) {

  const handleChange = (event, value) => {
    props.pageCallback(value);
  }
  
  return <Pagination count={props.pageNumber} shape="rounded" onChange={handleChange}/>;
}

export default CustomPagination;
