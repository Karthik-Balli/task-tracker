import PropTypes from 'prop-types';

const Button = ({ text, color, btnClick }) => {
    return (
        <button className='btn' style={{backgroundColor: color}} onClick={btnClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'stealblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    btnClick: PropTypes.func
}

export default Button