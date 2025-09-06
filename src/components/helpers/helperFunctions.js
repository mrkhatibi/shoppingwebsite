function SliceTitles(title) {
  const words = title.split(" ");
  if (words.length <= 3) return title;
  return words.slice(0, 3).join(" ") + "...";
}

const sumProducts = (products) => {
  const ItemsCounter = products.reduce((acc , cur)=> acc+cur.quantity , 0 )
  const total = products.reduce((acc , cur)=> acc + cur.quantity*cur.price , 0).toFixed(2)
  return {ItemsCounter , total}
}


const quantityChecker = (state , id)=> {
  const product= state.find(item=> item.id === id)
  return product?.quantity
}
export {SliceTitles ,sumProducts , quantityChecker}
