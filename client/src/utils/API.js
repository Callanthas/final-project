import axios from "axios";

export default {
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the example with the given id
  getStudent: function(id) {
    return axios.get(`/api/students/${id}` );
  },
  getProject: function(id) {
    return axios.get(`/api/projects/${id}` );
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
  }
};
