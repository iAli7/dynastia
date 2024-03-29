import useNumberMap from "../composables/useNumberMap";

const food = useNumberMap("food")
const happiness = useNumberMap("happiness")
const population = useNumberMap("population")
const gold = useNumberMap("gold")

const clearAllData = () =>{
    localStorage.clear();
    [food, happiness, population, gold].forEach(el =>{
        el.deleteItem("hunter.build")
        el.deleteItem("fish.build")
        el.deleteItem("happiness")
        el.deleteItem("population")
        el.deleteItem("food")
    })
}

export default clearAllData