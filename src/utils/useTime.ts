import { ref } from "vue";
import useDay from "./useDay";

const time = ref("8:00");
let isDayUpdated = false;

setInterval(() => {
  const [hour, minute] = time.value.split(":").map(Number);
  let nextHour = hour;
  let nextMinute = minute + 1;

  if (nextMinute === 60) {
    nextMinute = 0;
    nextHour = (nextHour + 1) % 24;

    if (nextHour === 0 && !isDayUpdated) {
      useDay().addDay();
      isDayUpdated = true;
    }
  } else {
    isDayUpdated = false;
  }

  time.value = `${nextHour < 10 ? "0" : ""}${nextHour}:${nextMinute < 10 ? "0" : ""}${nextMinute}`;
}, 500);

export default time;
