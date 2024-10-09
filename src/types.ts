export interface JobResponse {
  jobCount: number
  jobs: Job[]
}

export interface Job {
  id: number
  url: string
  jobSlug: string
  jobTitle: string
  companyName: string
  companyLogo: string
  jobIndustry: string[]
  jobType: string[]
  jobGeo: string
  jobLevel: string
  jobExcerpt: string
  jobDescription: string
  pubDate: string
  annualSalaryMin?: string
  annualSalaryMax?: string
  salaryCurrency?: string
}

export interface IndustryResponse {
  industries: Industry[]
}

export interface Industry {
  industryID: number
  industryName: string
  industrySlug: string
}

export interface Filters {
  industrySlug: string;
  countrySlug: string;
}

export interface Country {
  name: string;
  flag: string;
  slug: string;
}