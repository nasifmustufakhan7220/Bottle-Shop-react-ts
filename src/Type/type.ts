export interface BottleTypes {
      id: string,
      name: {
        common: string,
        official: string
      },
      brand: {
        name: string
      },
      price: {
        amount: number,
        currency: "USD"
      },
      capacity: {
        value: 750,
        unit: "ml"
      },
      category: {
        name: string
      },
      material: {
        primary: string
      },
      colors: string[],
      features: string[],
      ratings: {
        average: number,
        count: number
      },
      stock: {
        available: boolean,
        quantity: number
      },
      image: {
        png: string
      }
    
}