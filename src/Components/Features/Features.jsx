import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";


const Features = ({ feature }) => {
    return (
        <div className=" text-xl space-y-2">
            <p className="flex items-center"><AiFillCheckCircle className="text-green-500 text-2xl pr-2"></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
};

export default Features;