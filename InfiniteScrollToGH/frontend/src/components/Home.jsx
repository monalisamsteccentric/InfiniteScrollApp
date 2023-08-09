import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
// import Job from './Job';



const Home = () => {
  const job = [
    {
        "_id": "64ccbb52731400c238a37877",
        "": "0",
        "Job Title": "Data Analyst, Center on Immigration and Justice (CIJ)",
        "Salary Estimate": "$37K-$66K (Glassdoor est.)",
        "Job Description": "Are you eager to roll up your sleeves and harness data to drive policy change? Do you enjoy sifting through complex datasets to illuminate trends and insights? Do you see yourself working for a values-driven organization with a vision to tackle the most pressing injustices of our day?\n\nWe are looking to hire a bright, hard-working, and creative individual with strong data management skills and a demonstrated commitment to immigrant's rights. The Data Analyst will assist with analysis and reporting needs for Veras Center on Immigration and Justice (CIJ), working across its current projects and future Vera initiatives.\n\nWho we are:\n\nFounded in 1961, The Vera Institute is an independent, non-partisan, nonprofit organization that combines expertise in research, technical assistance, and demonstration projects to assist leaders in government and civil society examine justice policy and practice, and improve the systems people rely on for justice and safety.\nWe study problems that impede human dignity and justice.\nWe pilot solutions that are at once transformative and achievable.\nWe engage diverse communities in informed debate.\nAnd we harness the power of evidence to drive effective policy and practice\nWhat were doing:\n\nWe are helping to build a movementamong government leaders, advocates, and the immigration legal services communitytowards universal legal representation for immigrants facing deportation. In the face of stepped-up immigration enforcement, millions of non-citizens are at risk of extended detention and permanent separation from their families and communities. Veras Center on Immigration and Justice (CIJ) partners with government, non-profit partners, and communities to improve government systems that affect immigrants and their families. CIJ administers several nationwide legal services programs for immigrants facing deportation, develops and implements pilot programs, provides technical assistance, and conducts independent research and evaluation.\n\nThats where you come in:\nThe Data Analyst will support the Centers programmatic efforts through regular monitoring and reporting of federal government and subcontractor data. CIJ manages several proprietary databases that run on AWS and Caspio and uses SQL, R, and Python to manage data. This is an opportunity to help shape an innovative national research and policy agenda as part of a dedicated team of experts working to improve access to justice for non-citizens.\n\nVera seeks to hire a Data Analyst to work on various data management projects with its Center on Immigration and Justice (CIJ). In collaboration with other Data Analysts, this position will involve work across several projects, such as the Unaccompanied Childrens Program (UCP), a program to increase legal representation for immigrant children facing deportation without a parent or legal guardian. The position may cover additional duties for the Legal Orientation Program for Custodians (LOPC), which educates the custodians of unaccompanied children about their rights and the immigration court process.\n\nAbout the role:\n\nAs a Data Analyst, you will report to a member of the research team and work in close collaboration with other Vera staff on ongoing database management, monitoring, reporting, and analysis projects. Youll support the team by taking ownership of ongoing monitoring and reporting tasks involving large data sets. Other principal responsibilities will include:\nSupporting research staff by preparing large datasets for analysis, including merging, cleaning, and recoding data;\nProviding insights into program performance through summary statistics and performance indicators;\nProducing timely reports on Vera projects for team members and stakeholders;\nImproving recurring reporting processes by optimizing code and producing subsequent documentation;\nCoordinating database management tasks such as participating in new database design, modifying existing databases, and communicating with outside engineers and subcontractors;\nDeveloping codebooks and delivering user trainings through webinars and database guides;\nBuilding and maintaining interactive dashboards;\nDocumenting and correcting data quality issues;\nWorking with supervisors to prioritize program needs;\nAssisting on other projects and tasks as assigned.\nAbout you:\n\nYoure committed to improving issues affecting immigrants in the United States. Applicants with personal experiences with the immigration system are especially encouraged to apply.\n\nYoure just getting started in your career and have 1 2 years of professional or internship experience working with large datasets and preparing data for analysis.\n\nYou have a real enthusiasm for working with data.\n\nYou are comfortable writing queries in SQL, R, and/or Python, or have a solid foundation coding in other programming languages used to manipulate data. Experience working collaboratively using tools like Git/GitHub is a plus.\n\nYou have exceptional attention to detail, strong problem-solving ability and logical reasoning skills, and the ability to detect anomalies in data.\n\nYoure able to work on multiple projects effectively and efficiently, both independently and collaboratively with a team.\n\nThis position involves working with secure data that may require government security clearance. That clearance is restricted to U.S. citizens and citizens of countries that are party to collective defense agreements with the U.S. The list of those countries is detailed on this webpage. An additional requirement of that clearance is residence in the United States for at least three of the last five years.\n\nHow to apply:\n\nPlease submit cover letter and resume. Applications will be considered on a rolling basis until position is filled. Online submission in PDF format is preferred. Applications with no cover letter attached will not be considered. The cover letter should address your interest in CIJ and this position.\n\nHowever, if necessary, materials may be mailed or faxed to\n\nATTN: Human Resources / CIJ Data Analyst Recruitment\n\nVera Institute of Justice\n\n34 35th St, Suite 4-2A\n\nBrooklyn, NY 11232\n\nFax: (212) 941-9407\n\nPlease use only one method (online, mail or fax) of submission.\n\nNo phone calls, please. Only applicants selected for interviews will be contacted.\n\nVera is an equal opportunity/affirmative action employer. All qualified applicants will be considered for employment without unlawful discrimination based on race, color, creed, national origin, sex, age, disability, marital status, sexual orientation, military status, prior record of arrest or conviction, citizenship status, current employment status, or caregiver status.\n\nVera works to advance justice, particularly racial justice, in an increasingly multicultural country and globally connected world. We value diverse experiences, including with regard to educational background and justice system contact, and depend on a diverse staff to carry out our mission.\n\nFor more information about Vera and CIJs work, please visit www.vera.org.\n\nPowered by JazzHR",
        "Rating": "3.2",
        "Company Name": "Vera Institute of Justice\n3.2",
        "Location": "New York, NY",
        "Headquarters": "New York, NY",
        "Size": "201 to 500 employees",
        "Founded": "1961",
        "Type of ownership": "Nonprofit Organization",
        "Industry": "Social Assistance",
        "Sector": "Non-Profit",
        "Revenue": "$100 to $500 million (USD)",
        "Competitors": "-1",
        "Easy Apply": "True"
    },
    {
        "_id": "64ccbb52731400c238a37878",
        "": "1",
        "Job Title": "Quality Data Analyst",
        "Salary Estimate": "$37K-$66K (Glassdoor est.)",
        "Job Description": "Overview\n\nProvides analytical and technical support for the integration of multiple data sources used to prepare internal and external reporting for the Quality Management team and business stakeholders. Provides support and analytical insight for Quality Incentive measures, HEDIS measures, and Quality Improvement initiatives. Monitors, analyzes, and communicates Quality performance related to benchmarks. Collaborates with clinical and operational teams within Quality Management, as well as with CHOICE Clinical Operations and Business Intelligence & Analytics (BIA). Participates in data validation of current reporting and dashboards. Monitors data integrity of databases and provides recommendation accordingly. Participates in the development of internal dashboards and databases. Works under general direction.\n\nResponsibilities\nProvides support and analytical insight for Quality Incentive measures, HEDIS measures, and Quality Improvement initiatives.\nMonitors internal performance against benchmarks through analysis.\nParticipates in the identification, development, management, and monitoring of quality improvement initiatives.\nCollaborates with Education staff and makes recommendations for areas of focus in training of assessors and care managers, based on analysis of performance trends.\nResearches and identifies technical/operational problems surrounding systems/applications; communicates/refers complex and unresolved problems to management, Business Intelligence & Analytics (BIA), and/or IT.\nConducts ad hoc analyses to help identify operational gaps in care; drafts presentations, reports, publications, etc. regarding results of analyses.\nCommunicates results of data analysis to non-technical audiences.\nParticipates in prioritization of departmental goals based on identification of operational gaps in care.\nParticipates in establishing data quality specifications and designs. Coordinates and supports integrated data systems for analyzing and validating information.\nIdentifies and makes recommendations for reporting re-designs and platforms for reporting (e.g. automating a manual Excel file using macros, developing a MicroStrategy dashboard to replace manually updated Excel dashboards, moving data storage from Excel to Access, etc.), as needed. Trains staff on use of new/updated systems and related topics.\nAssists Quality management team with database and department reports. Conducts operations review and analysis of processes and procedures, issues report of findings and implements approved changes as required.\nIdentifies and recommends software needs and applications to accomplish required reporting.\nRetrieves, compiles, reviews and ensures accuracy of data from databases; researches and corrects discrepancies, as needed. Analyzes data from internal and external sources. Identifies and resolves data quality issues before reports are generated. Works with staff to correct data entry errors.\nAnalyzes data, identifies trends, reoccurring problems, statistically significant findings and prepares reports/summaries for management review.\nActs as a liaison between Quality Management, CHOICE Clinical Operations, and BIA.\nReviews and identifies trends and variances in data and reports. Researches findings and determines appropriateness of elevating identified issues to leadership for further review/evaluation/action.\nMonitors and maintains files by ensuring that files are current and of relevant nature.\nAnalyzes and corrects error reports to ensure timely and accurate data; develops corrective actions to prevent errors where possible.\nParticipates in special projects and performs other duties, as needed.\nQualifications\nEducation: Bachelors degree in bio/statistics, epidemiology, mathematics, computer science, social sciences, a related field or the equivalent work experience required. Masters degree with concentration in computer science, data science, or statistics preferred.\n\n\nExperience: Minimum of two years experience performing increasingly complex data analysis and interpretation, preferably in a managed care or health care setting, required. Experience with data extraction and manipulation required. Experience with relational databases and programming experience in SQL or PL/SQL required. Experience with claims data and health plan quality metrics (e.g., HEDIS, QARR) preferred. Proficiency conducting statistical analysis with R, SAS, Stata or other statistical software preferred. Advanced personal computer skills, including Microsoft Word, PowerPoint, Excel, and Access required. Effective oral, written communication and interpersonal skills required. Ability to multi task in a fast-paced environment required.\n\nCA2020",
        "Rating": "3.8",
        "Company Name": "Visiting Nurse Service of New York\n3.8",
        "Location": "New York, NY",
        "Headquarters": "New York, NY",
        "Size": "10000+ employees",
        "Founded": "1893",
        "Type of ownership": "Nonprofit Organization",
        "Industry": "Health Care Services & Hospitals",
        "Sector": "Health Care",
        "Revenue": "$2 to $5 billion (USD)",
        "Competitors": "-1",
        "Easy Apply": "-1"
    },
    {
        "_id": "64ccbb52731400c238a37879",
        "": "2",
        "Job Title": "Senior Data Analyst, Insights & Analytics Team [Customer Operations]",
        "Salary Estimate": "$37K-$66K (Glassdoor est.)",
        "Job Description": "We’re looking for a Senior Data Analyst who has a love of mentorship, data visualization, and generating actionable insights from raw data. In this role, you’ll have the opportunity to be an organizational influencer, who will generate insights with a good degree of autonomy, and partner with data science to grow deeper analytical skills. You will be joining the Insights & Analytics team, a team tasked with developing insights and reporting to support our customers and advisors’ needs. This team sits within the Customer Operations team, but is also connected to the Product organization.\n\nIn this role, you will work mainly with Customer Operations stakeholders to set KPIs and evaluate the effectiveness of current strategies and workflows. You will be involved in many aspects of data operations, from data auditing to building dashboards and analytical insights. For example, you will review the code of more junior analysts and organize coding workshops. You will build metrics to evaluate the performance of our advisors, eliminating confounding variables and creating weighted measures that account for individual success. You will define metrics and create dashboards to track the success of the current strategic direction. You will analyze the text-based interactions with our advisors to improve care quality. You will also analyze interactions with our chatbot to improve the responses of the bot to match customer expectations. You will collaborate with the Data Engineering team in pursuit of better data modeling and you can collaborate with the Data Science team on more modeling-heavy pursuits, like topic modeling or search recommendations. You will be a mentor to all other members of the analytics team, which demands that you excel in a culture of teaching and learning.\n\nYou will report to the Manager of the Insights & Analytics team, Customer Operations in Squarespace’s New York offices.\n\nRESPONSIBILITIES\nDesign and develop KPIs, reports, and dashboards using BI/data visualization tools that clearly track the effectiveness of current strategies\nExecute and communicate impactful analyses, using SQL and R/Python to improve the customer experience and drive Customer Operations and Product roadmap\nRaise the skill level of the analytics team through reviewing code, organizing training sessions, acting as a mentor, and introducing new analytical methods and tools\nHelp design and evaluate experiments and pilots, setting clear hypotheses and success metrics, as well as using the right statistical methods for analyses\nEffectively partner with Customer Operations and Product stakeholders, as well as our Data Engineering team\nQUALIFICATIONS\n4 or more years of experience as a data analyst, data scientist, or in a relevant field in which you have worked with large datasets to transform data to meaningful insights\nMastery of SQL, and experience with R/Python\nExperience with dashboarding/BI tools like Chartio, Looker, Tableau\nExperience with data cleaning, analysis, and presentation to non-technical stakeholders\nBachelor’s degree in a quantitative or logic-driven discipline\nIntellectual curiosity and a deep love of mentorship and generating actionable insights\nPreferred: Advanced degree (Master’s or PhD) in quantitative field\nPreferred: Experience with topic modeling, text analytics/natural language processing\nWe are hiring at various experience levels and we’re particularly interested in having a diverse team with a broad set of skills and viewpoints. If this seems like an opportunity you’d like to explore, but you’re not sure if you qualify, we encourage you to apply anyway!\n\nAbout Squarespace\n\nSquarespace makes beautiful products to help people with creative ideas succeed. By blending elegant design and sophisticated engineering, we empower millions of people — from individuals and local artists to entrepreneurs shaping the world’s most iconic businesses — to share their stories with the world. Squarespace’s team of more than 900 is headquartered in downtown New York City, with offices in Dublin and Portland. For more information, visit www.squarespace.com/about.\n\nToday, more than a million people around the globe use Squarespace to share different perspectives and experiences with the world. Not only do we embrace and celebrate the diversity of our customer base, but we also strive for the same in our employees. At Squarespace, we are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender, gender identity or expression, or veteran status. We are proud to be an equal opportunity workplace.",
        "Rating": "3.4",
        "Company Name": "Squarespace\n3.4",
        "Location": "New York, NY",
        "Headquarters": "New York, NY",
        "Size": "1001 to 5000 employees",
        "Founded": "2003",
        "Type of ownership": "Company - Private",
        "Industry": "Internet",
        "Sector": "Information Technology",
        "Revenue": "Unknown / Non-Applicable",
        "Competitors": "GoDaddy",
        "Easy Apply": "-1"
    }
]
   const [jobs, setJobs] = useState(job);
   const [page, setPage] = useState(1)

 

   const fetchData = async () => {
    setPage(prev=> prev + 1)
    try {
      const response = await axios.get(`http://localhost:4000/jobs?page=${page}`);
      setJobs((jobs) => jobs.concat(response.data));
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
       <div>
        <h1>JOBS</h1>
          <InfiniteScroll
            dataLength={jobs.length}
            next={fetchData}
            hasMore={jobs.length !== 2253}
            loader={<h3>Loading...</h3>}
          >
            {
              jobs.map((job)=>{
                 return(<div style={{border:"1px solid black", padding:"10px"}} key={job._id}>
                  <p>{job['Company Name']}</p>
                  <p>{job['Easy Apply']}</p>
                  <p>{job.Competitors}</p>
                  <p>{job.Founded}</p>
                  <p>{job.Headquarters}</p>
                  <p>{job['Job Description']}</p>
                 </div>)
              })
            }
          </InfiniteScroll>
       </div>
    </>
  )
}

export default Home