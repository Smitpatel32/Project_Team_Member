import TeamMemCard from './TeamMemCard.jsx';

const TeamMem = ({ employees, selectCard, selectedTeam }) => {
  return (
    employees.map((emp) => (
      <TeamMemCard emp={emp} selectCard={selectCard} selectedTeam={selectedTeam} />
    ))
  )
}
export default TeamMem;