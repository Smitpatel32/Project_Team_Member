
const Heads = ({ selectedTeam, employeesCount }) => {
  return (
    <header className="container bg-warning text-white rounded">
      <div className="row justify-content-center mb-3 mt-3">
        <div class="col-8">
          <h1>Team-Member-Allocation</h1>
          <h2>{selectedTeam} has {employeesCount} {employeesCount === 1 ? "Member" : "Members"}</h2>
        </div>
      </div>
    </header>
  )
}
export default Heads;