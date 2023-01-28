import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Pages/LandingPage/Landing';

import Hack from './Pages/Hackathons/Hack';
import HackTitle from './Pages/Hackathons/HackTitle';

import Appreciation from './Pages/Appreciation/Appreciation';

// IMPOTING THE LOGIN PAGE 
import Login from './Pages/Login/Login';

// IMPORTING THE SIGNUP PAGE 
import Signup from './Pages/SIgnup/Signup';

// IMPORTING THE CHOOSE PAGE 
import Choose from './Pages/Choose/Choose';

// IMPORTING THE SUCCESSFUL TEAM CREATION PAGE 
import SuccessfulTeamCreation from './Pages/Successful/Successful';

// IMPORTING THE TEAM LIST PAGE 
import TeamList from './Pages/JoinTeams/TeamLIst';

// IMPORTING THE USER PROFILE PAGE 
import User from './UserProfile/User';

// IMPORTING THE REGISTER HACKATHON PAGE 
import RegHack from './Pages/Hackathons/RegisterHackathons/RegHack';

// IMPORTING THE BROWSEROUTES
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Landing />
        <Appreciation />

      </div>,
  },
  {
    path: "/hackathons",
    element:
      <div>
        <Hack />
        <HackTitle />

      </div>
  },
  {
    path: "/login",
    element:
      <div>
        <Login />

      </div>
  }, 
  {
    path: "/signup",
    element:
      <div>
        <Signup />

      </div>
  },
  {
    path: "/choose",
    element:
      <div>
        <Choose />

      </div>
  },
  {
    path: "/successfullTeam",
    element:
      <div>
        <SuccessfulTeamCreation />

      </div>
  },
  {
    path: "/teamlist",
    element:
      <div>
        <TeamList />

      </div>
  },
  {
    path: "/userProfile",
    element:
      <div>
        <User />

      </div>
  },
  {
    path: "/RegisterHackathon",
    element:
      <div>
        <RegHack />

      </div>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} basename="IIT KGP FRONTEND">

    </RouterProvider>
  </React.StrictMode>
);

