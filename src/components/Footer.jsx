import React from "react";
const Footer = () => {
    const showYear = new Date;

    return (
        <div className="footer">
            <p>copyright©{showYear.getFullYear()} Chala Olani, All Rights Reserved </p>
        </div>
      );
}
 
export default Footer;