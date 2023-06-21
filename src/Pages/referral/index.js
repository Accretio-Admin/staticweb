/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Color from "../../Assets/Color";
import Res from "../../Assets/Photo";
// import Button from "../../Components/buttons/Button";
import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';
import Sample from '../../Components/buttons/Sample';


function Referral() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [fontSize, setFontSize] = useState('35px');
    const [bottomFontSize, setBottomFontSize] = useState('20px');

    const location = useLocation();
    const [referral, setReferral] = useState("");
  
    useEffect(() => {
      const pathParts = location.pathname.split("/");
      const extractedValue = pathParts[pathParts.length - 1];
      setReferral(extractedValue);
    }, [location.pathname]);
    
    // const useQuery = () => {
    //     return queryString.parse(useLocation().search);
    //   };

    // const queryParams = useQuery();
    // const referral = queryParams.referral;

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
          setScreenHeight(window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
    
          if (windowWidth <= 768) {
            setFontSize('16px');
            setBottomFontSize('10px');
          } else if (windowWidth > 768 && windowWidth <= 1024) {
            setFontSize('20px');
            setBottomFontSize('15px');
          } else {
            setFontSize('35px');
            setBottomFontSize('20px');
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const onProceed = () => {
        window.location.href = `https://secure.unified.ph/retailerV2?referral=${referral}`;
    };

      // STYLES
    const headingStyle = {
        color: Color.text3,
        fontSize: isMobile? 20 : fontSize,
        fontWeight: 'bold',
        textAlign: "center"
    };
    const container = {
        height: screenHeight,
        width: screenWidth,
        backgroundColor: Color.white1,
    };
    const topDiv = {
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const topMainDiv = {
        height: "100%",
        width: isMobile? "70%" : "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const midDiv = {
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const bottomDiv = {
        height: "30%",
    };
    const center_image = {
        width: isMobile? "90%" : "50%",
        height: isMobile? "70%": "90%",
    };
    const bottomTDiv = {
        height: "40%",
        display: "flex",
        justifyContent: "center",
    };
    const bottomBDiv = {
        height: "60%",
        display: "flex",
        justifyContent: "center",
    };
    const bottomText = {
        marginTop: isMobile? -20 : 10,
        color: Color.text1,
        fontSize: isMobile? 13 : bottomFontSize,
        fontWeight: "500",
        textAlign: "center"
    };
    const buttonStyle = {
        backgroundColor: Color.yellow1,
        color: Color.white,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '12px',
        fontSize: isMobile? 15 : bottomFontSize,
        cursor: 'pointer',
        width: isMobile? "80%" : "40%",
        height: isMobile? "30%": "40%",
    };
  return (
    <div style={container}>
        <div style={topDiv}>
            <div style={topMainDiv}>
                <h1 style={headingStyle}>Experience seamless transaction with Unified!</h1>
                {/* <h1 style={headingStyle}>{referral}</h1> */}
                {/* <Sample label="label to"/> */}
            </div>
        </div>
        <div style={midDiv}>
            <img src={Res.get("center_logo")} style={center_image} />
        </div>
        <div style={bottomDiv}>
            <div style={bottomTDiv}>
                <span style={bottomText}>Experience seamless transaction with Unified!</span>
            </div>
            <div style={bottomBDiv}>
                <button onClick={onProceed} style={buttonStyle}>Proceed to Registration</button>
                {/* <Button label="Proceed to Registration" onPress={onProceed}
                    style={buttonStyle}
                    labelStyle={{ color: Color.white }} /> */}
            </div>
        </div>
    </div>
  );
  
}



export default Referral;