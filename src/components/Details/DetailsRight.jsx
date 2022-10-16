import React, { useState } from "react";

const DetailsRight = ({ data }) => {
  const [tabType, setTabType] = useState("info");

  const {
    summary,
    instructions,
    extendedIngredients,
    title,
    diets,
    dishTypes,
    healthScore,
    readyInMinutes,
    pricePerServing,
  } = data || {};

  const handleSetTabType = (value) => {
    setTabType(value);
  };

  return (
    <div className="col-span-12 md:col-span-7 space-y-4">
      <Tab active={tabType} action={handleSetTabType} />

      {tabType === "info" && (
        <div className="space-y-2">
          <p className="text-xl text-blue-700 font-bold">{title}</p>
          <ListItem text="Diets" data={diets} />
          <ListItem text="Dish types" data={dishTypes} />
          <Item text="Health score" value={healthScore} />
          <Item text="Ready in minutes" value={readyInMinutes} />
          <Item text="Price per serving" value={pricePerServing} />
        </div>
      )}

      {tabType === "summary" && (
        <p
          dangerouslySetInnerHTML={{ __html: summary }}
          className="text-sm text-justify"
        ></p>
      )}

      {tabType === "ingredients" && (
        <div className="space-y-2">
          {extendedIngredients?.map((item, index) => (
            <p key={item.id} className="text-sm">
              <span>{`(${index + 1}) `}</span>
              {item.original}
            </p>
          ))}
        </div>
      )}

      {tabType === "instructions" && (
        <p
          dangerouslySetInnerHTML={{ __html: instructions }}
          className="text-sm text-justify"
        ></p>
      )}
    </div>
  );
};

export default DetailsRight;

const Tab = ({ active, action }) => {
  return (
    <div className="flex items-center gap-2">
      {["info", "summary", "ingredients", "instructions"].map((item, index) => (
        <TabItem key={index} text={item} active={active} action={action} />
      ))}
    </div>
  );
};

const TabItem = ({ text, active, action }) => {
  return (
    <button
      onClick={() => action(text)}
      className={`text-sm capitalize px-2 py-1 rounded-md ${
        active === text ? "bg-blue-500 text-white font-semibold" : "bg-gray-300"
      }`}
    >
      {text}
    </button>
  );
};

const ListItem = ({ text, data }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-blue-700 font-bold">{text} : </p>
      <div className="flex items-center flex-wrap gap-2">
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <button
              key={index}
              className="text-xs text-white font-semibold capitalize bg-blue-400 rounded-md px-2 py-1"
            >
              {item}
            </button>
          ))
        ) : (
          <p className="text-sm">Not available</p>
        )}
      </div>
    </div>
  );
};

const Item = ({ text, value }) => {
  return (
    <p className="text-sm">
      <span className="text-blue-700 font-semibold">{text + " : "}</span>
      {value ? value : "Not available"}
    </p>
  );
};
