
import PropTypes from 'prop-types'
import Feature from '../feature/feature';
const PriceOption = ({option}) => {
    const {name,price, features} = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
              
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            {
                features.map((feature,index) => <Feature key={index} feature={feature}></Feature> )
            }
        </div>
    );
};
PriceOption.propType = {
    option:PropTypes.object
}

export default PriceOption;