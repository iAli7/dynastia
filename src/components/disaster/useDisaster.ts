import { ref } from "vue";
import { MessageKey } from "../../locale/messages/tr";
import useDay from "../../stores/useDay";
import createStorage from "../../utils/createStorage";
import { disasterTypes } from "./disasterTypes";
import { disasterEffect } from "./disasterEffect";
import { food } from "../../composables/resource";

const disasterType = createStorage<MessageKey>("disaster.type", "disaster.unknown");
const disasterDay = createStorage<number>("disaster.time", 0);
const countDisasterDay = createStorage<number>("disaster.countDay", 0);
const showPopup = ref(false)

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

    const disasterProcess = () =>{
        showPopup.value = true;

        disasterEffect.forEach(disaster => {
            if(!disaster.bloodMoon) return;

            food.setItem("disaster.food", disaster.bloodMoon.food)
        });

        setTimeout(() => {
            showPopup.value = false
        }, 4000);
    }

    const handleDisasterProcess = () => {
        if (countDisasterDay.value - day.value === -1) {
            getRandomDisasterDay();
            getRandomDisasterType()
            countDisasterDay.value = day.value + disasterDay.value;
        } else if (countDisasterDay.value - day.value === 0) {
            disasterProcess()
        }
    };

    handleDisasterProcess();

    return {
        disasterType,
        handleDisasterProcess,
        countDisasterDay,
        showPopup
    };
};
