document.addEventListener("DOMContentLoaded", () => {
  const habitForm = document.getElementById("habit-form");
  const habitInput = document.getElementById("habit-input");
  const habitList = document.getElementById("habit-list");

  loadHabits();

  habitForm.addEventListener("submit", addHabit);
  habitList.addEventListener("click", handleHabitClick);

  function addHabit(event) {
    event.preventDefault();

    const habitText = habitInput.value.trim();
    if (habitText === "") return;

    const habit = {
      text: habitText,
      completed: false,
    };

    const li = createHabitElement(habit);
    habitList.appendChild(li);

    saveHabit(habit);

    habitInput.value = "";
  }

  function createHabitElement(habit) {
    const li = document.createElement("li");
    li.className = "habit-item" + (habit.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.completed;

    const span = document.createElement("span");
    span.appendChild(document.createTextNode(habit.text));

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
  }

  function handleHabitClick(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const li = target.parentElement;
      removeHabit(li);
      habitList.removeChild(li);
    } else if (target.type === "checkbox") {
      const li = target.parentElement;
      toggleHabitComplete(li);
    }
  }

  function saveHabit(habit) {
    const habits = getHabits();
    habits.push(habit);
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  function getHabits() {
    const habits = localStorage.getItem("habits");
    return habits ? JSON.parse(habits) : [];
  }

  function loadHabits() {
    const habits = getHabits();
    habits.forEach((habit) => {
      const li = createHabitElement(habit);
      habitList.appendChild(li);
    });
  }

  function removeHabit(habitElement) {
    const habits = getHabits();
    const habitText = habitElement.querySelector("span").innerText;
    const updatedHabits = habits.filter((habit) => habit.text !== habitText);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  }

  function toggleHabitComplete(habitElement) {
    const habits = getHabits();
    const habitText = habitElement.querySelector("span").innerText;
    const habit = habits.find((habit) => habit.text === habitText);
    habit.completed = !habit.completed;
    localStorage.setItem("habits", JSON.stringify(habits));
    habitElement.classList.toggle("completed");
  }
});
