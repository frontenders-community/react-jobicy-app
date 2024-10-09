import React from "react";
import { Job } from "../types";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.jobTitle}</h2>
      <h3 className="company-name">{job.companyName}</h3>
      <p className="location">{job.jobGeo}</p>
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html: job.jobDescription.slice(0, 250) + "...",
        }}
      ></p>

      <div className="tags">
        {job.jobIndustry.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      {(job.annualSalaryMin || job.annualSalaryMax) && (
        <p className="salary">
          Salary:
          {job.annualSalaryMin && `${job.annualSalaryMin}`}
          {job.annualSalaryMin && job.annualSalaryMax && "-"}
          {job.annualSalaryMax && `${job.annualSalaryMax}`}
          {job.salaryCurrency && `${job.salaryCurrency}`}
        </p>
      )}

      <p className="posted-at">Posted: {new Date(job.pubDate).toLocaleDateString()}</p>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-button"
      >
        View Job
      </a>
    </div>
  );
};

export default JobCard;
