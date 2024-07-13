const timeline = document.getElementById("timeline");
let events = [];

function addEvent() {
  const eventInput = document.getElementById("event");
  const dateInput = document.getElementById("date");

  const eventDescription = eventInput.value;
  const eventDate = dateInput.value;

  if (eventDescription) {
    const event = {
      description: eventDescription,
      date: eventDate ? new Date(eventDate) : new Date(),
    };

    events.push(event);
    events.sort((a, b) => a.date - b.date);
    renderTimeline();

    // Clear input fields
    eventInput.value = "";
    dateInput.value = "";
  } else {
    alert("Please enter an event description.");
  }
}

function renderTimeline() {
  timeline.innerHTML = "";

  events.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.className = "event";

    const dateElement = document.createElement("div");
    dateElement.className = "date";
    dateElement.textContent = event.date.toLocaleDateString();

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "description";
    descriptionElement.textContent = event.description;

    eventElement.appendChild(dateElement);
    eventElement.appendChild(descriptionElement);

    timeline.appendChild(eventElement);
  });
}
