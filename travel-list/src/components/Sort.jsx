function Sort({ sort, setSort, onClearList }) {
  return (
    <div>
      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="input">Sort by the input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed stats</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
}

export default Sort;
