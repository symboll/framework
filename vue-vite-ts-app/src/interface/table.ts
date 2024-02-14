export interface TableColumn {
  title: string,
  key: string,
  custom?: boolean,
  dataUseSlot?: boolean
}

export interface TableData {
  id: number,
  name: string,
  age: number,
  address: string,
  [key: string]: number | string
}