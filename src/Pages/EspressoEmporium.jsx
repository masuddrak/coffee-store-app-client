import { useLoaderData } from "react-router-dom";
import emBanner from "../assets/empress/Rectangle 2.png"
import SingleCoffee from "../components/SingleCoffee";
import { useState } from "react";
const EspressoEmporium = () => {
    const loaderData=useLoaderData()
    const [coffees,setCoffees]=useState(loaderData)
    return (
        <div>
            <div style={{
                background: `url(${emBanner})`,
                // backgroundSize:"cover",
                backgroundPosition: '',
                backgroundSize: 'cover',
                objectFit: "contain",
                backgroundRepeat: 'no-repeat'
            }} className="min-h-[50vh]  bg-bottom flex items-center w-full">

                <div className="grid grid-cols-2">
                    <div></div>
                    <div className="text-white space-y-3">
                        <h3 className="text-3xl">Would you like a Cup of Delicious Coffee?</h3>
                        <p>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn border-none rounded-none py-2 bg-[#E3B577]">Lear more</button>
                    </div>
                </div>
            </div>
            {/* all coffee */}
            <div className="grid grid-cols-2 gap-10 mt-10">
                {
                    coffees.map(coffee=><SingleCoffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></SingleCoffee>)
                }
            </div>
        </div>
    );
};

export default EspressoEmporium;