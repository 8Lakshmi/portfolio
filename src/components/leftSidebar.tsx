

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Report";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Sidebar() {
    const menu = [
        { name: "Dashboard", icon: <DashboardIcon /> },
        { name: "Payment", icon: <PaymentIcon /> },
        { name: "Report", icon: <ReportIcon /> },
        { name: "AccountBalanceIcon", icon: <AccountBalanceIcon /> },
    ];

    const profile = ["Friends", "profile", "Settings"];

    return (
        <div className="h-screen border-r border-gray-200 w-64   p-[10px] space-y-24 bg-white">
            <div className="flex flex-row items-center pt-8">
                <div>Ditaur</div>
            </div>
            <div className="space-y-24">
                <div>
                    <div className="mb-4 text-indigo-700">General</div>
                    <ul className="space-y-7">
                        {menu.map((val, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex flex-row items-center text-gray-400"
                                >
                                    <div className="mr-5">{val.icon}</div>
                                    <div>{val.name}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <div className="mb-7 text-indigo-700">profile</div>
                    <div className="space-y-7">
                        {profile.map((val, index) => {
                            return (
                                <div className="flex items-center text-gray-400">
                                    <div className="h-4 w-4 border border-indigo-500 mr-4 rounded-full" />
                                    {val}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
