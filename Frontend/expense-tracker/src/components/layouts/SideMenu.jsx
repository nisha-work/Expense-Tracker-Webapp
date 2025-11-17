import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";   // ✅ ONLY THIS ONE

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">

  {user?.profileImageUrl ? (
    <img
      src={user.profileImageUrl}
      alt="Profile"
      className="w-20 h-20 rounded-full object-cover"
    />
  ) : (
    <CharAvatar
      fullName={user?.fullName}
      width="w-20"
      height="h-20"
      style="text-xl"
    />
  )}

  <h5 className="text-gray-950 font-medium leading-6">
    {user?.fullName || ""}
  </h5>
</div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
  key={`menu_${index}`}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${activeMenu === item.id 
    ? "bg-[#845EC2] text-white shadow-sm" 
    : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => {
    setActiveMenu(item.id);
    handleClick(item.path);
  }}
>
  <item.icon className="text-xl" />
  <span className="font-medium">{item.label}</span>
</button>

      ))}
    </div>
  );
};

export default SideMenu;
