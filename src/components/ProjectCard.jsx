import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, language, updated }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-2 w-64">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-500 mt-1">Language: {language}</p>
            <p className="text-xs text-gray-500">Updated: {updated}</p>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
};

export default ProjectCard;