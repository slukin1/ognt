import { Input } from "components";

import { SearchInputProps } from "./types";

const SearchInput: React.FC<SearchInputProps> = ({ label, classSearch, onChange }) => {
  return (
    <div className={classSearch ? classSearch : "relative mr-3 text-left sm:mr-5"}>
      {label ? (
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "12px",
            marginBottom: "8px",
            paddingLeft: "2px",
          }}
        >
          {label ? label : "Search"}
        </p>
      ) : null}
      <Input
        placeholder="Search"
        onChange={onChange}
        id="search"
        prefixIcon={<img height={20} width={20} alt="search surveys" src={"/images/search-sm.svg"} />}
      />
    </div>
  );
};

export default SearchInput;
