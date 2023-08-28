import React from "react";

const AddSubtitle = ({ handleSubtitle }) => {
  return (
    <div className="w-[100%] flx p-4 text-xl">
      <input
        className="p-4 text-purpleCustom outline-none w-[93%] border-2 border-purpleCustom  bg-black "
        placeholder="Subtitle..."
        name="subtitle"
        onChange={handleSubtitle}
      />
    </div>
  );
};

export default AddSubtitle;
