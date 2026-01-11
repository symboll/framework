import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount, decrement } from "./slice";
import styles from "./index.module.scss";

export const Home = () => {
  const count = useSelector((state: any) => state.home.value);
  const dispatch = useDispatch();

  return (
    <>
      <h5>Home</h5>
      <div>
        <button aria-label="Increment" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className={styles.count}>{count}</span>
        <button aria-label="Decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
};
