new Vue({
  el: "#app",
  data: {
    newTask: "",
    tasks: [
      { text: "Learn Vue.js", isEditing: false },
      { text: "Build a Vue.js app", isEditing: false },
    ],
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ text: this.newTask, isEditing: false });
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(task) {
      task.isEditing = false;
    },
  },
});