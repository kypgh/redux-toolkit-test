import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/todo/filterSlice";

const FilterStatus = () => {
  const availableFilters = ["all", "complete", "incomplete"];
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <h3>Filter Todos</h3>
      {availableFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            handleFilterChange(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterStatus;
