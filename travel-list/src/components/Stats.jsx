import React from "react";

function Stats({ items }) {
  if (!items.length)
    return <p className="stats"> <em>Start adding some items to your packing list</em></p>;
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentages = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentages === 100 ? (
          <span>You got everything! Ready to go ✈</span>
        ) : (
          `you have ${numItems} items on your list,and you already packed ${numPackedItems},
        (%${percentages})`
        )}
      </em>
    </footer>
  );
}

export default Stats;
