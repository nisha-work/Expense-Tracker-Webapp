import React from 'react'

const InfoCard = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="p-5 bg-white shadow rounded-xl flex items-center gap-4">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color}`}>
        <Icon className="text-white text-xl" />
      </div>

      <div>
        <p className="text-gray-600">{label}</p>
        <h3 className="text-2xl font-semibold">${value}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
