import { MessageKey } from "../../locale/messages/tr";
import useDay from "../../stores/useDay";
import createStorage from "../../utils/createStorage";
import { disasterTypes } from "./disasterTypes";

const disasterType = createStorage<MessageKey>("disaster.type", "disaster.unknown");
const disasterDay = createStorage<number>("disaster.time", 0);
const countDisasterDay = createStorage<number>("disaster.countDay", 0);

export const useDisaster = () => {
    const getRandomDisasterType = (): MessageKey => {
            const keys = Object.keys(disasterTypes);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            const randomDisasterType = disasterTypes[Number(randomKey)] as MessageKey;
            disasterType.value = randomDisasterType;
            return randomDisasterType;
    };

    const getRandomDisasterDay = (): number => {
        const randomDay = Math.floor(Math.random() * 12);
        disasterDay.value = randomDay;
        return randomDay;
    };

    getRandomDisasterDay();

    const day = useDay();
    const count = countDisasterDay.value;
    
    if (count === 0) {
        countDisasterDay.value = day.value + disasterDay.value;
    }

    let interval: number | null | undefined = null;

    const startCountdown = () => {
        interval = setInterval(() => {
            if (day.value > countDisasterDay.value - 1) {
                getRandomDisasterDay();
                getRandomDisasterType()
                countDisasterDay.value = day.value + disasterDay.value;
            }
            if (day.value === countDisasterDay.value) {
                console.log("Hey!");
            }
        }, 1000);
    };

    const stopCountdown = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };

    // getRandomDisasterType();
    startCountdown();

    return {
        disasterType,
        stopCountdown,
        countDisasterDay
    };
};
