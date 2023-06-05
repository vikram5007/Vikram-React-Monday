import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header'
import Content from './Content'
import Info from './Info';

function App() {
  const [items, setitems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "coding"
      },
      {
        id: 2,
        checked: 0,
        item: "playing"
      },
      {
        id: 3,
        checked: true,
        item: "reading"
      }
    ]);

    const handleCheck = (id) => {
      const listitems = items.map((item) => item.id === id
        ? { ...item, checked: !item.checked }
        : item
      )
      setitems(listitems);
      localStorage.setItem("todo_items", JSON.stringify(listitems));
    }
    
    const handleDelete = (id) => {
      const listitems = items.filter((item) => item.id !== id)
      setitems(listitems);
    
    
    }
    if (items.length === 0) {
      var h3 = document.getElementById("h3")
      h3.style.display = "block";
    }
    
  return (
    <div>
      <Header title="Hello there" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Info
      length={items.length}
      />
    </div>
  );
}

export default App;
