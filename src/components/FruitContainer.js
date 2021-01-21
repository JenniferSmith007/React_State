import { useState, useEffect } from "react";
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";

const FruitContainer = (props) => {
  // init the fruit list to the full list passed in props.
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  console.log(props, "cont");
  //method that updates state when the filter value changes. method will store filter state
  // filter the list of fruits to display
  // change handler to filter component
  // react to user input
  const handleFilterChange = (event) => {
    event.preventDefault();
    const filterValue = event.target.value;
    setFruitsToDisplay((_prevState) => {
      // remove fruits that dont contain filter value
      const filterFruitList = props.fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(filterValue.toLowerCase());
      });
      //return new state with filter fruit list and new value of filter
      return filterFruitList;
    });
  };
  useEffect(() => {
    console.log(fruitsToDisplay, `dosomething`);
  }, [fruitsToDisplay]);
  return (
    <div>
      <FruitFilter onChange={(e) => handleFilterChange(e)} />
      <FruitList fruits={fruitsToDisplay} />
    </div>
  );
};

export default FruitContainer;
