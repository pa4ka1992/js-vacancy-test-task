export interface Product {
  id: string,
  title: string,
  price: number,
  imgUrl: string
}

export interface Buyings extends Product {
  count: number,
  purhaseDate?: Date
}
