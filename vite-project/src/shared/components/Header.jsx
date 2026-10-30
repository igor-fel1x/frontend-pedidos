import styles from './Header.module.css';

export function Header({ title, onBack, right }) {
  return (
    <header className={styles.header}>
      {onBack && (
        <button className={styles.back} onClick={onBack}>← Voltar</button>
      )}
      <strong className={styles.logo}>KL CLUB</strong>
      {title && <h1 className={styles.title}>{title}</h1>}
      <div className={styles.right}>{right}</div>
    </header>
  );
}