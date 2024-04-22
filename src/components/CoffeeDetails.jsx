import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const loaderData = useLoaderData()
    const { name, supplier, category, photo, chef, taste, details } = loaderData
    return (
        <div>
            <h2>{loaderData._id}</h2>
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content">
                        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Name:{name}</h1>
                            <p className="py-6">supplier:{supplier}</p>
                            <p className="py-6">supplier:{category}</p>
                            <p className="py-6">Chef:{chef}</p>
                            <p className="py-6">Taste:{taste}</p>
                            <p className="py-6">Details:{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;