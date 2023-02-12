import { useState } from "react";

const GroupTeamMem = ({ employees, selectedTeam, setTeam }) => {

  const [GroupedEmp, setGroupedEmp] = useState(groupedTeamMem());

  function groupedTeamMem() {
    var team = [];
    var teamAMem = employees.filter((emp) => emp.teamName === "TeamA");
    var teamA = { team: "TeamA", members: teamAMem, collapsed: selectedTeam === "TeamA" ? false : true }
    team.push(teamA)

    var teamBMem = employees.filter((emp) => emp.teamName === "TeamB");
    var teamB = { team: "TeamB", members: teamBMem, collapsed: selectedTeam === "TeamB" ? false : true }
    team.push(teamB)

    var teamCMem = employees.filter((emp) => emp.teamName === "TeamC");
    var teamC = { team: "TeamC", members: teamCMem, collapsed: selectedTeam === "TeamC" ? false : true }
    team.push(teamC)

    var teamDMem = employees.filter((emp) => emp.teamName === "TeamD");
    var teamD = { team: "TeamD", members: teamDMem, collapsed: selectedTeam === "TeamD" ? false : true }
    team.push(teamD)

    return team;
  }
  
function handleTeamClick(event){
  var newGrpData = GroupedEmp.map(
    (gEmp)=>gEmpteam===event.currentTarget.id
    ?{...gEmp,collapsed:!gEmp.collapsed}
    :gEmp);
  setGroupedEmp(newGrpData);
   setTeam(event.currentTarget.id);
}
  
  return (
    <main className="container">
      {
        GroupedEmp.map(
          (item)=>{
            return (
              <div key={item.team} className="card mt-4" style={{cursor:"pointer"}}>
                <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>Team Name : {item.team}</h4>
              <div id={'collapse_'+item.team} className={item.collapsed===true?"collapse":""}>
                {
                  item.members.map(member=>{
                    return (
                      <div className="mt-2 card-body">
                      <h5 className="card-title mt-2">
                        <span className="text-dark">Full Name: {member.fullName}</span>
                      </h5>
                        <p className="text-center mb-2">Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
                
              </div>
              </div>
            )
          }
          )
      }
    </main>
  )
}
export default GroupTeamMem;