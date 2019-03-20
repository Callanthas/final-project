import axios from "axios";

export default {
  // Gets all examples
  getExamples: function() {
    return axios.get("/api/example");
  },
  // Gets the example with the given id
  getExample: function(id) {
    return axios.get(`/api/example/${id}`);
  },
  // Deletes the example with the given id
  deleteExample: function(id) {
    return axios.delete(`/api/example/${id}`);
  },
  // Saves an example to the database
  saveExample: function(exampleData) {
    return axios.post("/api/example", exampleData);
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
