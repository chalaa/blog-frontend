import React from "react";
const Footer = () => {
    const showYear = new Date;

    return (
        <div className="footer">
            <p>copyrightÂ©{showYear.getFullYear()} Chala Olani, All Rights Reserved </p>
        </div>
      );
}
 
export default Footer;