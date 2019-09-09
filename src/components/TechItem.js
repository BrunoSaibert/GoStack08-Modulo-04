import React from "react";
import PropTypes from "prop-types";

export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oulto"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
