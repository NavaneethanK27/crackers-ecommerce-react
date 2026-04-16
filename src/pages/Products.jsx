import crackers from "../data/Crackers";
import ProductCard  from "../components/ProductCard";
function Products(){
    return(
        <div>
            <h1>Crackers List</h1>
            {crackers.map((item)=>(
                <ProductCard
                 key={item.id}
                 name={item.name}
                 price={item.price}
                 image={item.image}
                />
            ))}
        </div>
    );
}

export default Products;