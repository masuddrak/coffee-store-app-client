import swal from "sweetalert";
import watch from "../assets/empress/Group 12.png"
import update from "../assets/empress/Group 13.png"
import delet from "../assets/empress/Group 14.png"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCoffee = ({ coffee,coffees,setCoffees }) => {
    const { _id, name,  category, photo,  taste,  } = coffee
  
    const handelDeleteCoffee = _id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffees/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const deletedCoffees=coffees.filter(coff=>coff._id !==_id)
                            setCoffees(deletedCoffees)
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }
    return (
        <div className=" bg-[#f5f4f1]">
            <div className="m-10 flex justify-between gap-5 items-center">
                <div>
                    <img className="h-[200px]" src={photo} alt="" />
                </div>
                <div className="space-y-3">
                    <h2>{_id}</h2>
                    <h2>{name}</h2>
                    <h2>{category}</h2>
                    <h2>{taste}</h2>
                </div>
                <div className="flex flex-col gap-3">
                    <Link to={`/updateCoffees/${_id}`}><img src={watch} alt="" /></Link>
                    <Link to={`/coffees/${_id}`}><img src={delet} alt="" /></Link>
                    <button onClick={() => handelDeleteCoffee(_id)}><img src={update} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;
SingleCoffee.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}