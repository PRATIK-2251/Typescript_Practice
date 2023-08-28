// Enums
// Example - 1
enum TrafficLight {
  Green,
  Yellow,
  Red,
}

let currentLight: TrafficLight = TrafficLight.Green;

if (currentLight === TrafficLight.Green) {
  console.log("Go!🟢");
} else if (currentLight === TrafficLight.Yellow) {
  console.log("Slow down🟡");
} else if (currentLight === TrafficLight.Red) {
  console.log("Stop!🛑");
}

// Example - 2
enum DayOfWeek {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayMessage(day: DayOfWeek): string {
  switch (day) {
    case DayOfWeek.Sunday:
      return "It's a relaxing sunday";
    case DayOfWeek.Saturday:
      return "Enjoy your Saturday!";
    case DayOfWeek.Monday:
    case DayOfWeek.Tuesday:
    case DayOfWeek.Wednesday:
    case DayOfWeek.Thursday:
    case DayOfWeek.Friday:
      return "It's a weekday, Keep working!";
    default:
      return "Invalid day.";
  }
}

let today: DayOfWeek = DayOfWeek.Sunday;
console.log("Today ===> ", getDayMessage(today));
