import React, { useEffect, useState } from "react";
import { Flex } from "@sekmet/radix-ui-themes";

import { Dropdown, TabPanel, SearchInput } from "components";
import { NumOfSurveys, TagsMultiselect, SurveysList } from "./components";

import { useDebounce } from "hooks";
import { useHandlePayload } from "./hooks";

import { useAppDispatch, useAppSelector } from "store/store";
import {
  resetDiscoverSurveys,
  setActiveTab,
  setDiscoverSelectedTags,
  setDiscoverSurveyPayload,
} from "store/discover-survey";

import { selectCombinedData } from "./selectors";
import { membershipFilter, sortFilter, platformFilter, currencyFilter } from "./constants";

import { discoverSurveysOptions } from "store/discover-survey/types";
import { SurveyTags } from "store/create-survey/survey-tags/types";

const DiscoverSurveyPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const {
    surveyPayload,
    discoveredSurveys,
    activeTab,
    totalSurveys = 0,
    pending,
    selectedTags,
    tags,
  } = useAppSelector(selectCombinedData);

  const dispatch = useAppDispatch();

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const membershipValue =
    typeof surveyPayload.isPremium !== "undefined" ? (surveyPayload.isPremium ? "premium" : "free") : "all";

  const { updateSurveyPayload, updateNumSlider, showNextPage } = useHandlePayload();

  const handleSetActiveTab = (tab: string) => {
    if (tab !== activeTab) {
      dispatch(resetDiscoverSurveys());
      dispatch(setDiscoverSurveyPayload({ pageNumber: 1 }));
      dispatch(setActiveTab(tab));
    }
  };

  const handleSelectTags = (tags: SurveyTags[]) => {
    dispatch(setDiscoverSelectedTags(tags));
  };

  const handleSelectMembership = (value: string) => {
    const isPremium = value === "free" ? false : value === "premium" ? true : undefined;
    dispatch(resetDiscoverSurveys());
    dispatch(setDiscoverSurveyPayload({ isPremium, pageNumber: 1 }));
  };

  useEffect(() => {
    dispatch(resetDiscoverSurveys());
    dispatch(setDiscoverSurveyPayload({ search: debouncedSearchValue, pageNumber: 1 }));
  }, [debouncedSearchValue]);

  return (
    <section>
      <TabPanel
        activeTab={activeTab}
        title="Discover Surveys"
        setActiveTab={handleSetActiveTab}
        navItems={discoverSurveysOptions}
      />

      <SearchInput
        classSearch={"max-sm:w-full w-full max-sm:mr-0 relative text-left"}
        onChange={e => setSearchValue(e.target.value)}
      />

      <div className="mt-6">
        <Flex justify="between" wrap="wrap" gap="4">
          <Flex gap="5" wrap="wrap">
            <TagsMultiselect
              selectedTags={selectedTags}
              tags={tags}
              resetSelectedTags={() => dispatch(resetDiscoverSurveys())}
              setSelectedTags={tags => handleSelectTags(tags)}
            />
            <Dropdown
              key="platform"
              label="Platform"
              value={surveyPayload.chainId}
              options={platformFilter}
              onValueChange={(value: string) => updateSurveyPayload("chainId", value)}
            />
            <Dropdown
              key="currency"
              label="Currency"
              value={surveyPayload.currencyCode}
              options={currencyFilter}
              onValueChange={(value: string) => updateSurveyPayload("currencyCode", value)}
            />
            <Dropdown
              key="membership"
              value={membershipValue}
              label="Membership"
              options={membershipFilter}
              onValueChange={handleSelectMembership}
            />
            {/* <Dropdown
                key="verified"
                value={surveyPayload.verified}
                label="Verified"
                options={verifiedFilter}
                onValueChange={(value: string) => updateSurveyPayload("verified", value)}
              /> */}
            <NumOfSurveys
              label={"Number of Surveys"}
              defaultPageSize={surveyPayload.pageSize}
              resetStore={() => dispatch(resetDiscoverSurveys())}
              updateNumSlider={updateNumSlider}
            />
          </Flex>
          <Dropdown
            key="sortBy"
            label="Sort by"
            value={surveyPayload.pageOrder}
            options={sortFilter}
            onValueChange={(value: string) => updateSurveyPayload("pageOrder", value)}
          />
        </Flex>
      </div>

      <SurveysList
        pageNumber={surveyPayload.pageNumber}
        pageSize={surveyPayload.pageSize}
        surveys={discoveredSurveys}
        emptyText="Search Again"
        totalSurveys={totalSurveys}
        pending={pending}
        showNextPage={showNextPage}
      />
    </section>
  );
};

export default DiscoverSurveyPage;
