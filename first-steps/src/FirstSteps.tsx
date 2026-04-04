import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string;
    quantity:  number;
}

const itemsIncart : ItemInCart[]= [
    {productName: 'Calcetin', quantity: 3},
    {productName: 'Playera', quantity: 4},
    {productName: 'Gorra', quantity: 7},
];

export function FirstSrepsApp() {
    return(
        <>
    <h1>Carrito de compras</h1>
     {/*    <ItemCounter name="Calcetin" quantity={2} />
        <ItemCounter name="Playera" quantity={4} />
        <ItemCounter name="Gorra" quantity={7}/> */}

        {
            itemsIncart.map( ({productName, quantity}) =>  (
                <ItemCounter key={productName} name={productName} quantity={quantity}></ItemCounter>
            ))
        }
    </>
    );
}