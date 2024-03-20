import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-md text-center p-4 flex flex-col text-white">
            <h2>
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl my-10">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, idx) =>
                        <Features
                            key={idx}
                            feature={feature}
                        ></Features>)
                }
            </div>
            <div className="mt-12 bg-green-600 w-full py-2 font-bold rounded_lg hover:bg-green-900">Buy Now</div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;