import star from '../assets/images/icon-star.svg';
import data from '../data.json';
import FAQItem from "./FAQItem.tsx";


const FAQ = () => {
  return (
    <div className="faqCard">
        <span>
          <img src={star} alt="star"/>
          <span style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginLeft: '10px',
          }}>
            FAQs
          </span>
        </span>
        {data.map((item) => {
          return <FAQItem question={item.question} answer={item.answer}/>
        })}
    </div>
  );
}

export default FAQ