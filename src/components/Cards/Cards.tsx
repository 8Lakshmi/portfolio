// import React from 'react';
import Avatar from "@mui/material/Avatar";


const Cards: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex m-0 p-8 ">


      <div className="flex py-[12px] items-center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>




      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Total Balance</div>
        <p className="text-gray-700 text-base">
          $12800.59
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">+4.36%</span>
      </div>
    </div>

  );
}

export default Cards;
