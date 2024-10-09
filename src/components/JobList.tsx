import React from "react";
import { Job } from "../types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <>
      <h2>Lista delle posizioni</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard job={job} key={job.id}/>
        ))}
      </div>
    </>
  );
};

export default JobList;
