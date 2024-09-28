import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  const handelAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handelDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handelToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handelClearList = () => {
    const confirm = window.confirm("Are you sure?");
    confirm && setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
