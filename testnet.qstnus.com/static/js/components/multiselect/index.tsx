import React from "react";

import { Strong, Button, Text } from "@sekmet/radix-ui-themes";
import { Checkbox, Icons } from "components";

import { MultiselectProps } from "./types";

const Multiselect: React.FC<MultiselectProps> = ({
  selectedTags,
  tags,
  placeholder = "Select Options",
  isHideSelectAll = false,
  label,
  handleSelectTag,
  handleSelectAllTag,
  confirmButtonClick,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOptions = () => {
    if (tags.length) {
      setIsOpen(!isOpen);
    }
  };

  const selectedTagsLabel = tags
    .filter(({ id }) => selectedTags.some(({ id: selectedTagId }) => id === selectedTagId))
    .map(item => item.title)
    .join(", ");

  return (
    <div className="relative">
      {label && <p className="text-xs mb-2.5 font-medium text-gray-700 truncate dark:text-zinc-400">{label}</p>}
      <div className="flex flex-col">
        <button
          onClick={toggleOptions}
          className="w-full md:w-[300px] px-4 py-2.5 border-none bg-white rounded-xl focus:outline-none active:bg-gray-50 active:text-gray-800 dark:bg-[#1F1F22]"
        >
          <div className="inline-flex justify-between w-full">
            <p className="text-sm m-0 font-medium leading-5 text-gray-700 truncate dark:text-zinc-400">
              {selectedTagsLabel ? selectedTagsLabel : placeholder}
            </p>
            <Icons.ArrowLeft rotate={isOpen ? 90 : -90} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-[200px] md:w-[300px] bg-white border border-gray-300 rounded-xl max-h-[300px] overflow-y-scroll dark:bg-zinc-900">
          <div className="px-2 mt-2">
            <Button
              onClick={() => confirmButtonClick(toggleOptions)}
              style={{
                backgroundColor: "#A855F7",
                borderRadius: "12px",
                fontSize: "12px",
                cursor: "pointer",
              }}
              className="w-full"
            >
              <Text>
                <Strong>Confirm</Strong>
              </Text>
            </Button>
          </div>

          <div className="p-2 flex flex-col gap-1">
            {!isHideSelectAll && (
              <Checkbox
                onChange={handleSelectAllTag}
                checked={selectedTags.length === tags.length}
                label="Select All"
              />
            )}
            {tags.map(tag => {
              const { id, title } = tag;
              const isChecked = selectedTags.some(tag => tag.id === id);
              return <Checkbox key={id} onChange={() => handleSelectTag(tag)} checked={isChecked} label={title} />;
            })}
          </div>

          <div className="p-2">
            <Button
              onClick={() => confirmButtonClick(toggleOptions)}
              style={{
                backgroundColor: "#A855F7",
                borderRadius: "12px",
                fontSize: "12px",
                cursor: "pointer",
              }}
              className="w-full"
            >
              <Text>
                <Strong>Confirm</Strong>
              </Text>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Multiselect;
