/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function HandleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams); 
  }
  return (
    <Select
      options={options}
      type="white"
      onChange={HandleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
