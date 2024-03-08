import PropTypes from 'prop-types';

export default function ListItem({ name, description }) {
	return (
		<li className="text-sm">
			<div className="name font-semibold ">{name}</div>
			{description && <div className="description ">{description}</div>}
		</li>
	);
}

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
};
