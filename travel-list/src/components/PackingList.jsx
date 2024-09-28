import React from "react";
// import { initialItems } from "./data";
import Items from "./Items";
import Sort from "./Sort";
import { useState } from "react";
function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  // const listItems = initialItems;
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((items) => (
            <Items
              item={items}
              key={items.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <Sort sort={sort} setSort={setSort} onClearList={onClearList} />
      </div>
    </>
  );
}

export default PackingList;
