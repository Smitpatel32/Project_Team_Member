import './App.css';
import Heads from './Header.jsx';
import Footer from './footer.jsx';
// import Content from './content.jsx';
import { useState, useEffect } from 'react';
import Employees from './Employ.jsx';
import GroupTeamMem from './GroupTeam.jsx'
import Nav from './Nav.jsx';
import NotFound from './NotFound.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('TeamName')) || 'TeamA');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  useEffect(() => {
    localStorage.setItem('employList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('TeamName', JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  // change selected Team members

  function selectTeam(event) {
    setTeam(event.target.value);

  }

  function selectCard(event) {
    const trans = employees.map((emp) => emp.id === parseInt(event.currentTarget.id)
      ? (emp.teamName === selectedTeam) ? { ...emp, teamName: '' } : { ...emp, teamName: selectedTeam }
      : emp);
    setEmployees(trans);
  }



  return (
    <Router>
      <Nav />
      <Heads selectedTeam={selectedTeam} employeesCount={employees.filter((emp) => emp.teamName === selectedTeam).length} />
      <Routes>
        <Route path='/' element={<Employees employees={employees}
          selectedTeam={selectedTeam}
          selectCard={selectCard}
          selectTeam={selectTeam} />}>
        </Route>
        <Route path='/GroupTeam' element={<GroupTeamMem employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router >
  )
}
