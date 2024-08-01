import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUserProfilewithId, fetchUserProfilewithId, fetchRoles, fetchRegions, fetchDepartments } from './userProfileService';
import './usermgmt.css'; // Assuming you have this CSS file for additional styling

const EditUserPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    employeeId: '',
    employeeName: '',
    emailId: '',
    contactNumber: '',
    department: '',
    designation: '',
    activeStatus: false,
    roleNames: [],
    regionNames: [],
  });
  const [rolesList, setRolesList] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [selectAllRoles, setSelectAllRoles] = useState(false);
  const [selectAllRegions, setSelectAllRegions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [user, roles, regions, departments] = await Promise.all([
          fetchUserProfilewithId(id),
          fetchRoles(),
          fetchRegions(),
          fetchDepartments(),
        ]);
        setUserData(user);
        setRolesList(roles);
        setRegionsList(regions); // Use the full region string
        setDepartmentsList(departments);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setUserData({ ...userData, [name]: checked });
  };

  const handleMultiSelectChange = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setUserData({ ...userData, [name]: [...userData[name], value] });
    } else {
      setUserData({ ...userData, [name]: userData[name].filter(item => item !== value) });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfilewithId(id, userData);
      navigate('/users');
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  const handleSelectAll = (type) => {
    if (type === 'roles') {
      const newSelectAllRoles = !selectAllRoles;
      setSelectAllRoles(newSelectAllRoles);
      setUserData({ ...userData, roleNames: newSelectAllRoles ? rolesList : [] });
    } else if (type === 'regions') {
      const newSelectAllRegions = !selectAllRegions;
      setSelectAllRegions(newSelectAllRegions);
      setUserData({ ...userData, regionNames: newSelectAllRegions ? regionsList : [] });
    }
  };

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container1 mt-5">
      <h4 className="text-center mb-4">Edit User {id}</h4>
      <button className="btn btn-secondary mb-3" onClick={() => setIsEditable(!isEditable)}>
        {isEditable ? 'Cancel' : 'Edit'}
      </button>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <label htmlFor="employeeId" className="col-sm-2 col-form-label">Employee ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="employeeId" name="employeeId" value={userData.employeeId} onChange={handleInputChange} disabled={!isEditable} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="employeeName" className="col-sm-2 col-form-label">Employee Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="employeeName" name="employeeName" value={userData.employeeName} onChange={handleInputChange} disabled={!isEditable} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="emailId" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="emailId" name="emailId" value={userData.emailId} onChange={handleInputChange} disabled={!isEditable} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="contactNumber" className="col-sm-2 col-form-label">Contact Number</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={userData.contactNumber} onChange={handleInputChange} disabled={!isEditable} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="department" className="col-sm-2 col-form-label">Department</label>
          <div className="col-sm-10">
            <select className="form-control" id="department" name="department" value={userData.department} onChange={handleInputChange} disabled={!isEditable}>
              {departmentsList.map(department => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="designation" className="col-sm-2 col-form-label">Designation</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="designation" name="designation" value={userData.designation} onChange={handleInputChange} disabled={!isEditable} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Active Status</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="activeStatus" name="activeStatus" checked={userData.activeStatus} onChange={handleCheckboxChange} disabled={!isEditable} />
              <label className="form-check-label" htmlFor="activeStatus">Active</label>
            </div>
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="roleNames" className="col-sm2 col-form-label">Roles</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="selectAllRoles" onChange={() => handleSelectAll('roles')} checked={selectAllRoles} disabled={!isEditable} />
              <label className="form-check-label" htmlFor="selectAllRoles">Select All Roles</label>
            </div>
            <div className="d-xl-flex flex-wrap">
              {rolesList.map(role => (
                <div className="form-check form-check-inline" key={role}>
                  <input className="form-check-input" type="checkbox" id={`role-${role}`} name="roleNames" value={role} checked={userData.roleNames.includes(role)} onChange={handleMultiSelectChange} disabled={!isEditable} />
                  <label className="form-check-label" htmlFor={`role-${role}`}>{role}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="regionNames" className="col-sm-2 col-form-label">Regions</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="selectAllRegions" onChange={() => handleSelectAll('regions')} checked={selectAllRegions} disabled={!isEditable} />
              <label className="form-check-label" htmlFor="selectAllRegions">Select All Regions</label>
            </div>
            <div className="d-flex flex-wrap">
              {regionsList.map(region => (
                <div className="form-check form-check-inline" key={region}>
                  <input className="form-check-input" type="checkbox" id={`region-${region}`} name="regionNames" value={region} checked={userData.regionNames.includes(region)} onChange={handleMultiSelectChange} disabled={!isEditable} />
                  <label className="form-check-label" htmlFor={`region-${region}`}>{region}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isEditable && (
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate('/users')}>Cancel</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditUserPage;
