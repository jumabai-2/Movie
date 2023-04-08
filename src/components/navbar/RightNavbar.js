import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";

const RightNavbar = () => {
    return (
        <div>
            <div className="border-solid border-l-2 border-blue-[#C4CCD4] h-[100%] w-[300px] fixed right-[0]">
                <div className="mt-3 flex items-center">
                    <MDBIcon fas icon="search" className="position-absolute ml-10 z-10 text-[#687E93]"/>
                    <input className="position-relative outline-none ml-8 pl-8  rounded-3xl w-55 h-10 border-2 bg-[#DBE9F7] " type="text" placeholder="search"/>
                </div>
                <div className="flex items-center justify-content-between w-[88%] mt-8">
                    <p className="ml-8">Popular Movies</p>
                   <div className="flex items-center mb-2">
                       <div className="bg-[#687E93] w-[5px] h-[5px] rounded-3xl mr-1">
                       </div>
                       <div className="bg-[#687E93] w-[5px] h-[5px] rounded-3xl">

                       </div>
                   </div>

                </div>

            </div>

            </div>
    );
};

export default RightNavbar;