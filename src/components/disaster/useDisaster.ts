import { MessageKey } from "../../locale/messages/tr";
import createStorage from "../../utils/createStorage";
import { disasterTypes } from "./disasterTypes";

const disasterType = createStorage<MessageKey>("disaster.type", "disaster.unknown");
const disasterDay = createStorage<number>("disaster.time", 0);

export const useDisaster = () => {
    const getRandomDisasterType = (): MessageKey => {
        if (!disasterType.value) {
            const keys = Object.keys(disasterTypes);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            const randomDisasterType = disasterTypes[Number(randomKey)] as MessageKey;
            disasterType.value = randomDisasterType;
        }
        return disasterType.value;
    };

    const getRandomDisasterDay = (): number => {
        if (!disasterDay.value) {
            const randomDay = Math.floor(Math.random() * 7);
            disasterDay.value = randomDay;
        }
        return disasterDay.value;
    };

    getRandomDisasterDay()
    getRandomDisasterType()

    return {
        disasterType,
        disasterDay
    };
};
