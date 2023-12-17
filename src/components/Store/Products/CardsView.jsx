export const CardsView = (props) => {
   return (
   <main className="products">
      {props.items.map(function(item) {
      return (
      <div className="shopCard" key={item.id}>
         <h1 className="name">{item.name}</h1>
         <h2 className="color">{item.color}</h2>
         <span className="pic" style={{backgroundImage: `url(${item.img})`}}></span>
         <div className="additional">
            <span className="price">${item.price}</span>
            <button className="buy">Add to Cart</button>
         </div>
      </div>
      )
   })}
   </main>
   )
}