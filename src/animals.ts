export interface Animals {
    animals: Animal[]
    total: number
    skip: number
    limit: number
}
export interface Animal { 
    name: string
    category: string
}