import {Link} from 'react-router-dom'

import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = similarJobData

  return (
    <li className="similar-job-item">
      <div className="logo-name-container">
        <img src={companyLogoUrl} alt="thumbnail" className="thumbnail" />
        <div className="name-container">
          <h1 className="job-title">{title}</h1>
          <p className="job-rating">{rating}</p>
        </div>
      </div>
      <div className="location-package-container">
        <div className="location-container">
          <p className="job-location">{location}</p>
          <p className="job-type">{employmentType}</p>
        </div>
        <p className="job-package">{packagePerAnnum}</p>
      </div>
      <hr />
      <p className="description">description</p>
      <p className="job-description">{jobDescription}</p>
    </li>
  )
}

export default SimilarJobs
