import styles from './Card.module.css'
import Img from './Img';
import Paragraph from './Paragraph';

export default function Card({ children }) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className={styles.card_custom}>
        {children}
      </div>
    </div>
  );
}

Card.Img = Img;
Card.Paragraph = Paragraph;