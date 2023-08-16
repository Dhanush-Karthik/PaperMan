import React from "react";

const AddSubtitle = ({ handleSubtitle }) => {
  return (
    <div className="w-[100%] flx p-4">
      <input
        className="p-4 text-yellow-600 outline-none w-[100%] rounded-3xl bg-gray-800 "
        placeholder="Subtitle..."
        name="subtitle"
        onChange={handleSubtitle}
      />
    </div>
  );
};

export default AddSubtitle;
