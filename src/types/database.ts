export type Company = {
  id: string;
  title: string;
  address: string;
  logo_url: string;
  website_url: string;
  industry: string;
  created_at: string;
  updated_at: string;
};

export type Job = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  position: string;
  qualification: string;
  experience: string;
  job_type: string;
  specialization: string;
  facilities: string[];
  location_url: string;
  location_text: string;
  created_at: string;
  updated_at: string;
};
