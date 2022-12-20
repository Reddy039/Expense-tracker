function ExpenseFilter(props) {
  const filterChangeHandler = (e) => {
    props.onFilter(e.target.value);
  };
  return (
    <select onChange={filterChangeHandler} value={props.filterValue}>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
    </select>
  );
}

export default ExpenseFilter;
