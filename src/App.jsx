import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { OmdbSearch } from "./components/api/OmdbSearch";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { StudentTasksHome } from "./studentTasks/StudentTasksHome";
import { HeaderPortfolioTask } from "./studentTasks/01_header_portfolio/HeaderPortfolioTask";
import { MapDemo678910Task } from "./studentTasks/02_map_table/MapDemo678910Task";
import { TeamsListTask } from "./studentTasks/03_team_routing/TeamsListTask";
import { TeamDetailTask } from "./studentTasks/03_team_routing/TeamDetailTask";
import { ReactNotesTask } from "./studentTasks/04_notes/ReactNotesTask";
import { PropsTask } from "./studentTasks/05_props_table/PropsTask";
import { InputTenFieldsTask } from "./studentTasks/06_inputs_submit/InputTenFieldsTask";
import { DependentDropdownTask } from "./studentTasks/07_dependent_dropdown/DependentDropdownTask";
import { FormsTask } from "./studentTasks/08_forms/FormsTask";
import { MovieGridTask } from "./studentTasks/09_movie_tasks/MovieGridTask";
import { MovieDetailTask } from "./studentTasks/09_movie_tasks/MovieDetailTask";
import { ApiDemo3Task } from "./studentTasks/10_api_demo3/ApiDemo3Task";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/employees" element ={<Employees/>}></Route>
        <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo4/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element ={<ApiDemo2/>}></Route>
        <Route path="/omdb" element ={<OmdbSearch/>}></Route>

        <Route path="/student-tasks" element={<StudentTasksHome />}></Route>
        <Route path="/student-tasks/header-portfolio" element={<HeaderPortfolioTask />}></Route>
        <Route path="/student-tasks/map-table" element={<MapDemo678910Task />}></Route>
        <Route path="/student-tasks/teams" element={<TeamsListTask />}></Route>
        <Route path="/student-tasks/teamdetail/:teamName" element={<TeamDetailTask />}></Route>
        <Route path="/student-tasks/notes" element={<ReactNotesTask />}></Route>
        <Route path="/student-tasks/props" element={<PropsTask />}></Route>
        <Route path="/student-tasks/inputs" element={<InputTenFieldsTask />}></Route>
        <Route path="/student-tasks/dependent-dropdown" element={<DependentDropdownTask />}></Route>
        <Route path="/student-tasks/forms" element={<FormsTask />}></Route>
        <Route path="/student-tasks/movies" element={<MovieGridTask />}></Route>
        <Route path="/student-tasks/moviedetail/:imdbid" element={<MovieDetailTask />}></Route>
        <Route path="/student-tasks/apidemo3" element={<ApiDemo3Task />}></Route>

        <Route path="/*" element = {<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
