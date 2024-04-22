import watch from "../assets/empress/Group 12.png"
import update from "../assets/empress/Group 13.png"
import delet from "../assets/empress/Group 14.png"

const SingleCoffee = ({ coffee }) => {
    const { name, supplier, category, photo, chef, taste, details }=coffee
    return (
        <div className=" bg-[#f5f4f1]">
            <div className="m-10 flex justify-between gap-5 items-center">
                <div>
                    <img className="h-[200px]" src={photo} alt="" />
                </div>
                <div className="space-y-3">
                    <h2>{name}</h2>
                    <h2>{category}</h2>
                    <h2>{taste}</h2>
                </div>
                <div className="flex flex-col gap-3">
                        <button><img src={watch} alt="" /></button>
                        <button><img src={update} alt="" /></button>
                        <button><img src={delet} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;