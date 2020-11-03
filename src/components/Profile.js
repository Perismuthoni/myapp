import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <aside className="dashboard__sidebar">
      <ul className="dashboard__list">
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/overview">
            Overview
          </Link>
        </li>
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/appointments">
            My Appointments
          </Link>
        </li>
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/providers">
            My Providers
          </Link>
        </li>
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/facilities">
            Facilities
          </Link>
        </li>
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/pharmacies">
            Pharmacies
          </Link>
        </li>
        <li className="dashboard__item">
          <Link className="dashboard__link" to="/dashboard/myHealth">
            My Health
          </Link>
        </li>
      </ul>
      <div className="dashboard__copy">
        <p>&copy; PrescribeMe 2020</p>
      </div>
    </aside>
  );
};

export default Profile;
