import type {allatokType } from "../types/allatokType";
import type { CardProps } from "../types/cardProps";

export const tablazatData: allatokType[] = [
    {name: "Szimba", age: 8, weight: 190, endangered: true, food: ["Marhahús", "csirkehús"]},
    {name: "Lili", age: 12, weight: 3200, endangered: false, food: ["Fű", "levelek", "gyümölcsök"]},
    {name: "Beni", age: 6, weight: 850, endangered: true, food: ["Levelek", "ágak"]},
    {name: "Pötyi", age: 5, weight: 95, endangered: true, food: ["Bambusz", "sárgarépa"]},
    {name: "Csőrike", age: 4, weight: 28, endangered: false, food: ["Hal","krill"]}
]

export const cardData: CardProps[] = [
    {name: "Szimba", age: 8, weight: 190, type: "oroszlán", endangered: true, food: ["Marhahús", "csirkehús"]},
    {name: "Lili", age: 12, weight: 3200, type: "elefánt", endangered: false, food: ["Fű", "levelek", "gyümölcsök"]},
    {name: "Beni", age: 6, weight: 850, type: "zsiráf", endangered: true, food: ["Levelek", "ágak"]},
    {name: "Pötyi", age: 5, weight: 95, type: "panda", endangered: true, food: ["Bambusz", "sárgarépa"]},
]