import { useState } from "react";

import { Multiselect } from "components";

import { SurveyTags } from "store/create-survey/survey-tags/types";

const TagsMultiselect: React.FC<{
  selectedTags: SurveyTags[];
  tags: SurveyTags[];
  setSelectedTags: (localSelectTags: SurveyTags[]) => void;
  resetSelectedTags: () => void;
}> = ({ tags, selectedTags, resetSelectedTags, setSelectedTags }) => {
  const [localSelectTags, setLocalSelectedTags] = useState(selectedTags);

  const handleSelectTag = (tag: SurveyTags) => {
    setLocalSelectedTags(prev => {
      if (prev.some(({ id }) => id === tag.id)) {
        const selectedTags = prev.filter(tagItem => tagItem.id !== tag.id);
        return selectedTags;
      } else {
        const selectedTags = [...prev, tag];
        return selectedTags;
      }
    });
  };

  const handleSelectAllTag = () => {
    setLocalSelectedTags(prev => {
      if (prev.length === tags.length) {
        return [];
      } else {
        return tags;
      }
    });
  };

  const confirmButtonClick = () => {
    resetSelectedTags();
    setSelectedTags(localSelectTags);
  };

  return (
    <Multiselect
      label="Category"
      placeholder="All"
      tags={tags}
      selectedTags={localSelectTags}
      handleSelectAllTag={handleSelectAllTag}
      handleSelectTag={handleSelectTag}
      confirmButtonClick={confirmButtonClick}
    />
  );
};

export default TagsMultiselect;
