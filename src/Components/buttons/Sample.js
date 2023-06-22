/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
//import Color from "../../Assets/Color";
//import Res from "../../Assets/Photo";

function Sample(props) {
	const {label } = props;
    console.log("propss1", props);

	return (
        <div>
            <h1>{label}</h1>
        </div>

	);
};

Sample.propTypes = {
	// onPress: PropTypes.func,
	label: PropTypes.string,
	// disabled: PropTypes.bool,
	// isLoad: PropTypes.bool,
	// icon: PropTypes.string,
	// labelStyle: PropTypes.object,
	// style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Sample;
