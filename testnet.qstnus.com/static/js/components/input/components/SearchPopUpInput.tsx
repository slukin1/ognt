import { useEffect, useState } from "react";

import { Input } from "components";
import { CountryItem } from "store/user/profile/types";

const SearchPopUpInput: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  items: CountryItem[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
}> = ({ label, placeholder, items, value, selectedValue, onValueChange }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState(items);
  const [inputValue, setInputValue] = useState(selectedValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target;
    setInputValue(targetValue);
    setShowPopup(targetValue !== "" && targetValue !== selectedValue);
    setSearchResults(items.filter(item => item.name.toLowerCase().includes(targetValue.toLowerCase())));
  };

  const handleValueChange = (code: string, name: string) => {
    onValueChange(code);
    setShowPopup(false);
    setInputValue(name);
  };

  useEffect(() => {
    if (value !== selectedValue) {
      setInputValue(selectedValue);
    }
  }, [value, items]);

  return (
    <div className="w-full mb-6 relative">
      <div className="w-full">
        <label className="block mb-1.5" htmlFor="location">
          <small>{label}</small>
        </label>
        <Input onChange={handleInputChange} value={inputValue} placeholder={placeholder} width="100%" />
      </div>
      {showPopup && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-xl max-h-[300px] overflow-y-scroll dark:bg-zinc-800">
          <div className="py-2 flex flex-col">
            {searchResults.map(({ code, name }) => (
              <p
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer"
                key={name}
                onClick={() => handleValueChange(code, name)}
              >
                {name}
              </p>
            ))}
            {!searchResults.length && (
              <p className="px-2 py-4 text-zinc-600 dark:text-zinc-400 text-center">There are no matches</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPopUpInput;
