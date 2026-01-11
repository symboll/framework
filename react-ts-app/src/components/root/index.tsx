import { Outlet, useLoaderData } from "react-router";
import { Header } from "../header";
import { Menu } from "../left-menu";
import styles from "./index.module.scss";


export const Root = () => {
  const x = useLoaderData();
  const height = x?.header === false ? `100vh` : `calc(100vh - 64px)`;
  return (
    <>
      {x?.header === false ? null : <Header />}
      <div className={styles.content} style={{ height }}>
        {x?.menu === false ? null : (
          <aside className={styles.aside}>
            <Menu></Menu>
          </aside>
        )}
        <main className={styles.main}>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
