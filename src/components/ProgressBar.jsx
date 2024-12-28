// ProgressBar.jsx
import PropTypes from 'prop-types';

const ProgressBar = ({ skills }) => {
    return (
        <div className="flex flex-col w-full">
            {skills.map((skill, index) => (
                <div key={index} className="w-full mb-4">
                    <div className="flex justify-between items-center text-white">
                        <span className="text-lg font-mono">{skill.label}</span>
                        <span className="text-sm font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-white rounded h-6">
                        <div
                            className="bg-blue-900 rounded text-white flex items-center justify-center px-2 shadow"
                            style={{ width: `${skill.percentage}%` }}
                        >
                            {skill.percentage}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ProgressBar.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ProgressBar;