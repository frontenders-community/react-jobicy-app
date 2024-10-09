import React, { useEffect, useState } from "react";
import "./App.css";
import { Filters, Industry, IndustryResponse, Job, JobResponse } from "./types";
import JobList from "./components/JobList";
import JobFilters from "./components/JobFilters";
import { API_BASE_URL } from "./config/config";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [filters, setFilters] = useState<Filters>({industrySlug: "", countrySlug: ""});

  useEffect(() => {
    const fetchIndustries  = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}?get=industries`
        );
        if (!response.ok) {
          throw new Error("Caricamento delle posizioni è fallito");
        }
        const data: IndustryResponse = await response.json();
        setIndustries(data.industries);
      } catch (error) {}
    };

    fetchIndustries();

  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const url = new URL(API_BASE_URL);
        const params = new URLSearchParams(url.search);
        if (filters.industrySlug) {
          params.append("industry", filters.industrySlug);
        }
        if (filters.countrySlug) {
          params.append("geo", filters.countrySlug);
        }

        const response = await fetch(
          `${url}?${params.toString()}`
        );
        if (!response.ok) {
          throw new Error("Caricamento delle posizioni è fallito");
        } 
        const data: JobResponse = await response.json();
        console.log(data);
        if (data.jobs) {
          setJobs(data.jobs);
        }
      } catch (error) {}
    };

    fetchJobs();
  }, [filters]);

  const handleFiltersChange = (filters: Filters) => {
    console.log(filters);
    
    setFilters(filters);
  };

  return (
    <>
      <div className="flex">
        <div className="filters-container">
          <h2>Seleziona i filtri</h2>
          <JobFilters handleFiltersChange={handleFiltersChange} industries={industries}/>
        </div>
        <div className="jobs-container">
          <JobList jobs={jobs} />
        </div>
      </div>
    </>
  );
};

export default App;
