import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const loaderData=useLoaderData()
    const { _id,name, supplier, category, photo, chef, taste, details } = loaderData
    const handelUpadteCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const photo = form.photo.value
        const chef = form.chef.value
        const taste = form.taste.value
        const details = form.details.value
        const coffeeInfo = { name, supplier, category, photo, chef, taste, details }
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(coffeeInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
        console.log(coffeeInfo)
    }
    return (
        <div>
            <div className="bg-[#f4f3f0] p-10">
                <div className="text-center w-3/5 mx-auto space-y-3">
                    <h2 className="text-3xl font-bold">Upadte Coffee : {name}</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handelUpadteCoffee}>
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input border-none w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input border-none w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} placeholder="Enter coffee Category" className="input border-none w-full" />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input border-none w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input border-none w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input border-none w-full" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter coffee photo url" className="input border-none w-full" />
                    </div>
                    <div className="mt-10">
                        <button className="w-full bg-[#d2b48c] p-3 text-xl font-bold">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;