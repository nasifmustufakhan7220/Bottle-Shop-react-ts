import { use, useState } from "react";
import type { BottleTypes } from "../../Type/type";
import Bottle from "../Bottle/Bottle";

interface BottlesProps {
    bottlePromises: Promise<BottleTypes[]>;
}

const Bottles = ({bottlePromises}:BottlesProps) => {
    const bottles = use(bottlePromises);
    const [selectedBottleImg, setSelectedBottleImg] = useState<string[]>([]);
    const [selectedBottleName, setSelectedBottleName] = useState<BottleTypes[]>([]);


    const handelSlectedImg = (image:string):void=>{
        if(selectedBottleImg.includes(image)){
            const remainingImage = selectedBottleImg.filter(img=> img !== image);
            setSelectedBottleImg(remainingImage)
        }else{
            const newSelectedBottleImage = [...selectedBottleImg, image];
            setSelectedBottleImg(newSelectedBottleImage);
        }   
    }

    const handelSelectedName = (bottle:BottleTypes):void=>{
        
        const exited = selectedBottleName.find(id=> id.id === bottle.id);
        if(exited){
            const remaining = selectedBottleName.filter(id => id.id !== bottle.id);
            setSelectedBottleName(remaining);
        }else{
            const newSelectedName = [...selectedBottleName,bottle];
            setSelectedBottleName(newSelectedName);
        }
        
    }
    return (
        <>  
            <h1 className="text-4xl">Watter Bottles</h1>
            <h2 className="text-4xl">Bottles: {bottles.length}</h2>
            <h3>Selected cart: {selectedBottleImg.length}</h3>
            <ul>
                {
                    selectedBottleName.map((name, index)=> <li key={`${name.name.common}+${index}`}>{name.name.common}</li>)
                }
            </ul>
            <div className="flex">
                {
                    selectedBottleImg.map((img,index)=> <img className="w-30" key={index} src={img}/>)
                }
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelSlectedImg={handelSlectedImg} handelSelectedName={handelSelectedName}></Bottle>)
                }
            </div>
        
        </>
    );
};

export default Bottles;