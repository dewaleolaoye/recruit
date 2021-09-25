import styles from "./Overview.module.scss";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <img
          src="https://res.cloudinary.com/dewaleolaoye/image/upload/v1631620052/tellerOneBlue2_l3qkck.png"
          alt="teller one"
        />

        <h1>Senior React Developer</h1>
        <p>Abuja, Federal Capital Territory, NigeriaFull time</p>
      </div>
    </div>
  );
};

export default Overview;
