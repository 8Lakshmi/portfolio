import React from "react";
import Cards from "../../src/components/Cards/Cards";
import LeftSideBar from "../../src/components/leftSidebar";
import RightSidebar from "../components/Sidebar/rightSideBar";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";
import Charts from "../components/Charts/charts";
import Table from "../components/Table/table";

const Dashboard: React.FC = () => {
    return (
        <div className="flex p-[80px] bg-[#AABBCC]">
            <LeftSideBar></LeftSideBar>
            {/* <div className="w-28 h-screen bg-yellow-500 "></div> */}
            <div className="bg-[#f6f9f7]">
                <div className="p-[40px]">
                    <div>
                        <div className="text-[14px] font bold">Dashboard</div>
                        <div className="text -col font bold">
                            Today is friday,28 March 2022
                        </div>
                    </div>
                    {/* <div>
                        <div>
                            <input type="text" id="fname" name="fname" />
                        </div>
                    </div> */}

                    <div className="flex justify-between items-center mt-[10px]">
                        <div className="flex py-[px] items-center">
                            <div>
                                <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                    Overview
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            <div className="ml-[10px] ">
                                <FilterListOutlinedIcon />
                            </div>
                            <div className="ml-[10px] place-items-end">
                                <ViewComfyAltIcon />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row h-96px">
                        <Cards></Cards>
                        <Cards></Cards>
                        <Cards></Cards>
                    </div>
                    <div>
                        <Charts />
                    </div>
                    <div>
                        <Table />
                    </div>
                    <div className="text-2xl font bold "></div>
                </div>

                {/* <div className="flex p-1 rounded-lg bg-blue-400"></div> */}
                {/* <div className="px-1 py-1 bg-yellow-300 text-black">
                        search
                    </div> */}
            </div>
            <RightSidebar></RightSidebar>
            {/* <div className="w-28  flex-none h-screen  bg-violet-500 "></div> */}
        </div>
    );
};

export default Dashboard;
