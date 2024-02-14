
const mockData = {
  name: 'HHH',
  age: 199
}

export const getMockData = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 2000);
  })
}