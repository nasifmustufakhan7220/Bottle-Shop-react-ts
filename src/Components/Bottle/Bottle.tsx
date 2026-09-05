import { useState } from "react";
import type { BottleTypes } from "../../Type/type";

interface BottleProps {
    bottle: BottleTypes;
    handelSlectedImg: (image:string)=>void;
    handelSelectedName: (bottle: BottleTypes)=> void;
}

const Bottle = ({bottle, handelSlectedImg, handelSelectedName}:BottleProps) => {
    const {image, name, brand, price, capacity, category, colors, ratings, features, stock} = bottle;

    const [cart, setCart] = useState<boolean>(false);

    const handelCart = ()=>{
        setCart(!cart);
        handelSlectedImg(image.png);
        handelSelectedName(bottle);
    }

    return (
        <div>
            <div className={`h-140 ${cart ? "bg-sky-500" : "bg-sky-900"} p-5 rounded-lg my-6`}>
                <div className="h-52 w-full flex items-center justify-center mb-4">
                    <img className="h-full w-full object-contain" src={image.png} alt="" />
                </div>
                <div className="space-y-1">
                    <p className="text-xl font-medium text-white">Name: {name.common}</p>
                    <p className="text-sm font-medium text-white">Brand: {brand.name}</p>
                    <p className="text-sm font-medium text-white">Price: {`${price.amount} ${price.currency}`}</p>
                    <p className="text-sm font-medium text-white">Capacity: {`${capacity.value} ${capacity.unit}`}</p>
                    <p className="text-sm font-medium text-white">Category: {category.name}</p>
                    <p className="text-sm font-medium text-white">Color: {colors.map((color, index)=> <button key={index} className=" ml-2 p-2">{color}</button>)}</p>
                    <p className="text-sm font-medium text-white">Features: {features.map((feature, index) => <button key={index} className=" ml-2">{feature}</button>)}</p>
                    <p className="text-sm font-medium text-white">Rating: {ratings.average}</p>
                    <p className="text-sm font-medium text-white">Stock: {`${stock.available === true ? stock.quantity : 0}`}</p>
                </div>

                <button onClick={handelCart} className="border text-white rounded-xl px-4 py-2 my-2">{cart ? "Product added" : "Add to cart"}</button>
            </div>   
        </div>
    );
};

export default Bottle;