import React, { useState } from "react";
import {
  Button,
  Avatar,
} from "@mui/material";
import {
  PermIdentity as PermIdentityIcon,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  VpnKey as PasswordIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  CameraAlt as CameraAltIcon,
} from "@mui/icons-material";
import toast from "react-hot-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Sandeep Kumar",
    email: "sandeep@example.com",
    mobile: "+91 9876543210",
    password: "password123",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile Updated Successfully!");
    // In a real app, dispatch to API here
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profilePage">
      <h1>My Profile</h1>

      <div className="profileCard">
        {/* Header Section with Avatar */}
        <div className="profileHeader">
          <div className="avatarContainer">
            <Avatar
              sx={{ width: 120, height: 120, bgcolor: "#3b82f6", fontSize: "4rem" }}
              src="https://avatars.githubusercontent.com/u/95078278?v=4"
            />
            <div className="cameraIcon">
              <CameraAltIcon />
            </div>
          </div>
          <h2>{userData.name}</h2>
          <p>ShopNest Member</p>
        </div>

        <hr />

        {/* Form Section */}
        <div className="profileForm">
          <div className="formGroup">
            <div className="icon">
              <PermIdentityIcon />
            </div>
            <div className="inputConfig">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="customInput"
                />
              ) : (
                <h3>{userData.name}</h3>
              )}
            </div>
          </div>

          <div className="formGroup">
            <div className="icon">
              <EmailIcon />
            </div>
            <div className="inputConfig">
              <label>Email Address</label>
              {isEditing ? (
                <input
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="customInput"
                />
              ) : (
                <h3>{userData.email}</h3>
              )}
            </div>
          </div>

          <div className="formGroup">
            <div className="icon">
              <PhoneAndroidIcon />
            </div>
            <div className="inputConfig">
              <label>Mobile Number</label>
              {isEditing ? (
                <input
                  name="mobile"
                  value={userData.mobile}
                  onChange={handleChange}
                  className="customInput"
                />
              ) : (
                <h3>{userData.mobile}</h3>
              )}
            </div>
          </div>

          <div className="formGroup">
            <div className="icon">
              <PasswordIcon />
            </div>
            <div className="inputConfig">
              <label>Password</label>
              {isEditing ? (
                <input
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="customInput"
                />
              ) : (
                <h3>{"*".repeat(8)}</h3>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actionButtons">
          {isEditing ? (
            <Button
              variant="contained"
              color="success"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              sx={{ borderRadius: "20px", padding: "0.8rem 2rem", fontSize: "1rem" }}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={toggleEdit}
              startIcon={<EditIcon />}
              sx={{
                borderRadius: "20px",
                padding: "0.8rem 2rem",
                fontSize: "1rem",
                backgroundColor: "#3b82f6"
              }}
            >
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
