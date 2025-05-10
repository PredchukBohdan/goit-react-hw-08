import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <section className={s.home}>
      <h1 className={s.title}>Welcome to contacts manager!!!</h1>
      <p className={s.subtitle}>
        Create a list of contacts so you can always quickly view them.
      </p>
    </section>
  );
};
