import React from "react";

const statesWithAds = [
  { name: "Abuja (FCT)", ads: 2 },
  { name: "Lagos State", ads: 0 },
  { name: "Ogun State", ads: 0 },
  { name: "Oyo State", ads: 0 },
  { name: "Rivers State", ads: 0 },
  { name: "Abia State", ads: 0 },
  { name: "Adamawa State", ads: 0 },
  { name: "Akwa Ibom State", ads: 0 },
  { name: "Anambra State", ads: 0 },
  { name: "Bauchi State", ads: 0 },
  { name: "Bayelsa State", ads: 0 },
  { name: "Benue State", ads: 0 },
  { name: "Borno State", ads: 0 },
  { name: "Cross River State", ads: 0 },
  { name: "Delta State", ads: 0 },
  { name: "Ebonyi State", ads: 0 },
  { name: "Edo State", ads: 0 },
  { name: "Ekiti State", ads: 0 },
  { name: "Enugu State", ads: 0 },
  { name: "Gombe State", ads: 0 },
  { name: "Imo State", ads: 0 },
  { name: "Jigawa State", ads: 0 },
  { name: "Kaduna State", ads: 0 },
  { name: "Kano State", ads: 0 },
  { name: "Katsina State", ads: 0 },
  { name: "Kebbi State", ads: 0 },
  { name: "Kogi State", ads: 0 },
  { name: "Kwara State", ads: 0 },
  { name: "Nasarawa State", ads: 0 },
  { name: "Niger State", ads: 0 },
  { name: "Ondo State", ads: 0 },
  { name: "Osun State", ads: 0 },
  { name: "Plateau State", ads: 0 },
  { name: "Sokoto State", ads: 0 },
  { name: "Taraba State", ads: 0 },
  { name: "Yobe State", ads: 0 },
  { name: "Zamfara State", ads: 0 },
];

const groupedStates = statesWithAds.reduce((acc, state) => {
  const letter = state.name[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(state);
  return acc;
}, {});

const StateList = () => {
  const totalAds = statesWithAds.reduce((sum, state) => sum + state.ads, 0);

  return (
    <div className="max-w-5xl mx-auto p-4 text-gray-800">
     <div className="flex justify-between items-center mb-4 mt-3">
         <h2 className="text-2xl font-semibold mb-1">All Nigeria</h2>

      <input
        type="text"
        placeholder="Find state, city or district......"
        className="p-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
      />
     </div>

      <h3 className="text-lg font-semibold mb-2">Popular</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(groupedStates)
          .sort()
          .map((letter) => (
            <div key={letter}>
              <h4 className="font-bold text-blue-600 mb-1">{letter}</h4>
              <ul className="space-y-1">
                {groupedStates[letter].map((state) => (
                  <li key={state.name} className="text-sm flex  gap-3">
                    <span>{state.name}</span>
                    <span className="text-gray-500">• {state.ads} ads</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StateList;
