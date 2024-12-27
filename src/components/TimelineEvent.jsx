import PropTypes from 'prop-types';

const TimelineEvent = ({ date, content }) => {
    return ( 
        <li className="relative flex gap-6 pb-6">
            <div className="before:absolute before:left-[5.5px] before:h-full before:w-0.5 before:bg-black items-baseline">
                <svg width="10" height="10" viewBox="-3 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#000000"/> 
                </svg>
            </div>
            <div className="text-sm text-black">
                <p>{date}</p>
                <p>{content}</p>
            </div>
        </li>
    );
};

TimelineEvent.propTypes = {
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default TimelineEvent;