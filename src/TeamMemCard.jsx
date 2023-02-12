import femaleProfile from './Images/femaleProfile.jpg'
import maleProfile from './Images/maleProfile.jpg'

const TeamMemCard = ({ emp, selectCard, selectedTeam }) => {
  return (
    <div key={emp.id} id={emp.id} className={emp.teamName === selectedTeam ? "card m-2 border border-dark border-5" : "card m-2"} style={{ cursor: "pointer" }} onClick={selectCard}>
      {(emp.gender === "female") ? <img src={femaleProfile} className="card-img-top" /> : <img src={maleProfile} className="card-img-top" />
      }
      <div className='card-body'>
        <h5 className='card-title'>FullName : {emp.fullName}</h5>
        <p className='card-title'>Designation : {emp.designation}</p>
        <p className='card-title'>Gender : {emp.gender}</p>
        <p className='card-title'>TeamName : {emp.teamName}</p>
      </div>
    </div>
  )
}
export default TeamMemCard; 