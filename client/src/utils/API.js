import axios from "axios";

export default {
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the example with the given id
  getStudent: function(id) {
    return axios.get(`/api/students/${id}`);
  },
  getProject: function(id) {
    return axios.get(`/api/projects/${id}`);
  },
  getSupervisor: function(id) {
    return axios.get(`/api/supervisors/${id}` );
  },


  getByType: function(type, id) {
    return axios.get(`/api/${type}/${id}`);
  },

  getByUsername: function(type, username) {
    return axios.get(`/api/${type}/username/${username}`);
  },

  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },

  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },

  logoutUser: function() {
    return axios.post("/api/users/logout");
  },

  // ADMIN VIEW SAVES NEW STUDENT, PROJECT, EVENT AND SUPERVISOR(LEADER)
  saveNewStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  },

  saveNewProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },

  saveNewEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },

  saveNewSupervisor: function(supervisorData) {
    return axios.post("/api/supervisors", supervisorData);
  },

  
  getAny: function() {
    return axios.get("/api");
},

  saveCheckIn: function(id, checkIn) {
    return axios.put(`/api/students/${id}`, checkIn);
  },

  saveCheckOut: function(id, checkOut) {
    return axios.put(`/api/students/${id}`, checkOut);
  }
};
