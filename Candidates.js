import './Candidates.css'
import {MdCheckBoxOutlineBlank} from 'react-icons/md'

const Candidates = () => {
  const candidateData = [
    {
      name: 'Aaliyah Sanderson',
      address: 'Riyadh, Saudi Arabia',
      college: 'Bachelor - Cambridge University (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
    {
      name: 'John Doe',
      address: 'Bostom, USA',
      college: 'Bachelor - MIT (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
    {
      name: 'Thomas Matt',
      address: 'Edinburgh, UK',
      college: 'Bachelor - Harvard University (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
    {
      name: 'Kamilia Smith',
      address: 'London, UK',
      college: 'Bachelor - Boston University (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
    {
      name: 'Roy Jade',
      address: 'Cambridge,  UK',
      college: 'Bachelor - Yale (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
    {
      name: 'Ahmed Salman',
      address: 'New York, USA',
      college: 'Bachelor - Cambridge University (2023 - 2023)',
      hashtags: ['#top_candidate', '#top_candidate'],
      locations: ['New York', 'Marketing', 'London'],
    },
  ]

  return (
    <div className="CandidatesContainer">
      <div className="CandidatesHeader">
        <div className="LeftDiv">
          <MdCheckBoxOutlineBlank />
          <h1 className="CandidatesText"> 247 Candidates</h1>
        </div>

        <div className="RightCadidatesDiv">
          <h1 className="QualifiedText"> Qualified</h1>

          <div className="Line"> |</div>
          <div className="Task">
            <h1 className="TaskText"> Task</h1>
            <h1 className="TaskCount"> 25</h1>
          </div>

          <div className="Disqualified">
            <h1 className="DisqualifiedText"> Disqualified</h1>
            <h1 className="DisqualifiedCount"> 78</h1>
          </div>
        </div>
      </div>

      <div className="CadidatesListDiv">
        {candidateData.map((candidate, index) => (
          <div className="EachCandidatesDiv" key={index[1]}>
            <MdCheckBoxOutlineBlank />
            <div className="ProfileDiv">
              <h1 className="ProfileName"> AS</h1>
            </div>
            <div className="ProfileContentDiv">
              <h1 className="ProfileNameText">{candidate.name}</h1>
              <h1 className="ProfileAddressText">{candidate.address}</h1>
              <h1 className="ProfileCollegeText">{candidate.college}</h1>
              <div className="HashTag">
                {candidate.hashtags.map((tag, tagIndex) => (
                  <h1 className="HashTagText" key={tagIndex[1]}>
                    {tag}
                  </h1>
                ))}
              </div>
              <div className="Location">
                {candidate.locations.map((location, locationIndex) => (
                  <input
                    className="Location1"
                    type="text"
                    value={location}
                    key={location[1]}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Candidates
