const app = Vue.createApp({
  data() {
    return {
      newTask: "", // Input field binding
      tasks: [], // Array to hold tasks
      compTasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        // Check if input is not empty
        this.tasks.push(this.newTask.trim()); // Add new task to the array
        this.newTask = ""; // Clear the input field
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    addCompTask(index) {
      const compValue = this.tasks.splice(index, 1);
      this.compTasks.push(compValue[0]);
      console.log("efcecfec");
    },
  },
});

app.mount("#to-do-list");
