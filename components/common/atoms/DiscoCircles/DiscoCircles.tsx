import styles from './DiscoCircles.module.css'

const DiscoCircles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={16}
            strokeOpacity={1}
            strokeWidth={0.3}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#80D4FF"
            cx="50%"
            cy="50%"
            r="4"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={24}
            strokeOpacity={0.8}
            strokeWidth={0.3}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#ffcc66"
            cx="50%"
            cy="50%"
            r="10"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={12}
            strokeWidth={0.4}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#80D4FF"
            cx="50%"
            cy="50%"
            r="8"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={80}
            strokeWidth={0.4}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#5ccfe6"
            cx="50%"
            cy="50%"
            r="16"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={35}
            strokeWidth={0.5}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#ffcc66bb"
            cx="50%"
            cy="50%"
            r="20"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={33}
            strokeWidth={0.6}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#5ccfe6"
            cx="50%"
            cy="50%"
            r="25"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={40}
            strokeOpacity={0.4}
            strokeWidth={1}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#98a4bc"
            cx="50%"
            cy="50%"
            r="30"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={16}
            strokeOpacity={0.4}
            strokeWidth={7}
            fillOpacity={0}
            stroke="#7a8ba9"
            cx="50%"
            cy="50%"
            r="40"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={160}
            strokeOpacity={0.1}
            strokeWidth={2}
            fillOpacity={0}
            stroke="#7a8ba9"
            cx="50%"
            cy="50%"
            r="36"
          />
        </svg>
      </div>

      <div className={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            strokeDasharray={10}
            strokeOpacity={0.3}
            strokeWidth={1}
            fillOpacity={0}
            strokeLinecap="round"
            stroke="#343E50"
            cx="50%"
            cy="50%"
            r="28"
          />
        </svg>
      </div>
    </div>
  )
}

export default DiscoCircles
