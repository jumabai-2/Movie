import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";
import './style.css'

const LeftNavbar = () => {
    return (
        <div className="border-solid border-r-2 border-blue-[#C4CCD4] h-[100%] w-[200px] fixed left-[0] overflow-y-scroll">

            <div className=" px-[40px] pt-6">
         <p className="text-base"> <MDBIcon fas icon="eye" className="pr-1"/> Nonton</p>
          </div>
            <div className=" mt-6 flex flex-col">
                <h1 className="text-base px-[37px] text-[#C4CCD4] ">MENU</h1>
                <NavLink to={'/'} className="text-base text-[#535B64] px-[40px] hover:text-[#2A3EBF]"> <MDBIcon fas icon="home" className="pr-1"/> Home</NavLink>
                <NavLink to={'/community'} className="text-base px-[40px] text-[#535B64] mt-4 hover:text-[#2A3EBF]"> <MDBIcon fas icon="shield-alt" className="pr-1"/> Community</NavLink>
                <NavLink to={'/discover'} className="text-base px-[40px] text-[#535B64] mt-4 hover:text-[#2A3EBF]"> <MDBIcon fas icon="compass" className="pr-1"/>  Discover</NavLink>
                <NavLink to={'/awards'} className="text-base px-[40px] text-[#535B64] mt-4 hover:text-[#2A3EBF]"> <MDBIcon fas icon="award" className="pr-1"/> Awards</NavLink>
                <NavLink to={'celebs'} className="text-base px-[40px] text-[#535B64] mt-4 hover:text-[#2A3EBF]"> <MDBIcon fas icon="user" className="pr-1"/> Celebs</NavLink>
            </div>
            <div className="library mt-9">
                <h1 className="text-base px-[37px] text-[#C4CCD4]">LIBRARY</h1>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="clock" className="pr-1"/> Recent</p>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="star" className="pr-1"/> Top Rated</p>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="cloud-download-alt" className="pr-1"/>  Downloaded</p>
            </div>
            <div className="mt-9">
                <h1 className=" text-base px-[37px] text-[#C4CCD4]">CATEGORY</h1>
                <p className="hover:text-red-700 text-base px-[40px] "> <MDBIcon fas icon="tv"  className=" pr-1 "/> TV-Show</p>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="video" className="pr-1"/> Movie</p>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="certificate" className="pr-1"/>  Anime</p>
            </div>
            <div className="GENERAL mt-9 ">
                <h1 className=" cursor-pointer text-base px-[37px] text-[#C4CCD4]">GENERAL</h1>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="cog" className="pr-1"/> Setting</p>
                <p className="text-base px-[40px] text-[#535B64]"> <MDBIcon fas icon="sign-out-alt" className="pr-1"/> Log Out</p>
            </div>
        </div>
    );
};

export default LeftNavbar;