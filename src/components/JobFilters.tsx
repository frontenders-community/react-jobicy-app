import React, { useState } from "react";
import { Country, Filters, Industry } from "../types";
import europeanCountries  from "../assets/data";


interface JobFiltersProps {
  industries: Industry[];
  handleFiltersChange: (filters: Filters) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({industries, handleFiltersChange}) => {
  const countries = europeanCountries;

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");


  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(e.target.value);
    handleFiltersChange({industrySlug: e.target.value, countrySlug: selectedCountry});
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    console.log(e.target.value);
    handleFiltersChange({industrySlug: selectedIndustry, countrySlug: e.target.value});
  };

  return (
    <div className="job-filters">
      <select onChange={handleIndustryChange} className="filter-select">
        <option value="all">Tutti</option>
        {industries.map((industry) => (
          <option key={industry.industryID} value={industry.industrySlug}>
            {industry.industryName}
          </option>
        ))}
      </select>
      <select onChange={handleCountryChange} className="filter-select">
        <option value="all">Tutti</option>
        {countries.map((country: Country) => (
          <option key={country.name} value={country.slug}>{country.name}</option>
        ))}
      </select>
    </div>
  );
};

export default JobFilters;
