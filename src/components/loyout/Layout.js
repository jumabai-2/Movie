import React from 'react';
import LeftNavbar from "../navbar/LeftNavbar";
import RightNavbar from "../navbar/RightNavbar";

const Layout = ({children}) => {
    return (
        <div className="flex" >
            <LeftNavbar/>

            <div className="ml-[210px] mr-[310px]">
                {children}
            </div>
            <RightNavbar/>
        </div>
    );
};

export default Layout;