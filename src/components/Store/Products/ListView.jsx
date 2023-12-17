export const ListView = (props) => {
   return (
   <main className="products-list">
      {props.items.map(function(item) {
      return (
      <div className="shopItem" key={item.id}>
         <span className="pic-list" style={{backgroundImage: `url(${item.img})`}}></span>
         <h1 className="name">{item.name}</h1>
         <h2 className="color">{item.color}</h2>
         <span className="price">${item.price}</span>
         <button className="buy">Add to Cart</button>
      </div>
      )
   })}
   </main>
   )
}