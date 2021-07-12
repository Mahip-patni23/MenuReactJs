import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';
import Category from './category';

const allCategories = ["all", ...new Set(data.map((item) => {
  return item.category;
}))];


function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const displaySection = (category) => {
    if(category==="all")
    {
      setItems(data);
      return;
    }

    const newItems = data.filter((item) => {
      return category===item.category
    });
    setItems(newItems);
  }

  return <main>
    <header className="heading">
      <h2>our menu</h2>
      <div className="underline"></div>
    </header>
    <Category categories={categories} displaySection={displaySection}></Category>
    <section className="section-center">
         {
           items.map((item) => {
            return <Menu key={item.id} {...item}></Menu>
           })
         }
    </section>
  </main>
}

export default App;
