import Teams from './Teams.jsx';
import TeamMem from './TeamMembers.jsx'

const Employees = ({ employees, selectTeam, selectCard, selectedTeam }) => {


  return (
    <main className='container'>
      <div className='row justify-content-center mt-3'>
        <div className='col-6'>
          <Teams selectedTeam={selectedTeam} selectTeam={selectTeam} />
        </div>
      </div>
      <div className='row justify-content-center mt-5 mb-5'>
        <div className='col-9'>
          <div className='card-collection'>
            <TeamMem employees={employees} selectedTeam={selectedTeam} selectCard={selectCard} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees;