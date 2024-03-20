import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = props => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$30/month",
            "features": [
                "Access to cardio equipment",
                "Access to weight lifting area",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$50/month",
            "features": [
                "Access to all Basic features",
                "Group fitness classes included",
                "Personal training session once a month"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$80/month",
            "features": [
                "Access to all Standard features",
                "Unlimited group fitness classes",
                "Two personal training sessions per month",
                "Access to sauna and spa facilities"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-5xl">Best Price in the Town</h2>
            {
                priceOptions.map(option =>
                    <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
            }
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;