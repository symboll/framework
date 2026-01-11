export const loader = ({ params }: any) => {
  console.log('params', params)
  return { message: 'hello world' }
}