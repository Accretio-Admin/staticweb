/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import Color from "../../Assets/Color";
import Res from "../../Assets/Photo";
import "./Button.css";

function Button(props) {
	const {
		onPress, style, labelStyle, label,
		isLoad, disabled, icon,
	} = props;
    console.log("propss", props);

    const container = {
        height: 50,
        borderRadius: 12,
        backgroundColor: Color.yellow1,
    };
    const imageStyle = { height: 25, width: 25, marginRight: 10 };
    const buttonStyle = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
    const labelS = {
		fontSize: 15,
		lineHeight: 24,
		color: Color.white,
		fontFamily: "Poppins-Medium",
	};
	return (
        <div style={[container]}>
            <button className={isLoad ? 'button-loading' : 'button'} onClick={onPress}  style={buttonStyle} disabled={disabled}>
                {
                    !!icon && <img src={Res.get(icon)} style={imageStyle} />
                }
                {
                    isLoad ? <div className="spinner"></div> :
                    <span style={[labelS]}>{label || "Proceed"}</span>
                }
            </button>
        </div>

	);
};

Button.propTypes = {
	onPress: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	isLoad: PropTypes.bool,
	icon: PropTypes.string,
	labelStyle: PropTypes.object,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
