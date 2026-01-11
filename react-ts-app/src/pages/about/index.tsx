import { Form, useLoaderData } from "react-router";

export const About = () => {
  const { message } = useLoaderData();
  return (
    <>
      <h5>Home</h5>
      <div>mesage: {message}</div>

      <Form action="/project/123" method="post">
        <input type="text" name="title"></input>
        <button type="submit">submit</button>
      </Form>
    </>
  );
};
