import styles from "./Categories.module.css"


function Categories({setCategoryFilter , categoryFilter}) {
  const categoryitems = [
    "women's clothing",
    "men's clothing",
    "jewelery",
    "electronics",
  ];
  return (
    <div className={styles.container}>
        <h3>Categories</h3>
        {categoryFilter ?  <button onClick={()=>setCategoryFilter("")} >Delete Filters</button> : null}
       
      {categoryitems.map((item) => (
        <li key={item} onClick={()=>setCategoryFilter(item)} >{item}</li>
      ))}
    </div>
  );
}

export default Categories;
