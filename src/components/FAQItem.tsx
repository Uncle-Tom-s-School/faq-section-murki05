import plus from "../assets/images/icon-plus.svg";
import minus from '../assets/images/icon-minus.svg';
import {useState} from "react";

type FAQItemProps = {
question: string;
answer: string;
}

const FAQItem = ({question, answer}: FAQItemProps) => {
const [expanded, setExpanded] = useState(false);

return (
<span className="faqItem">
    <span style=
    {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
    }}>
        {question}
        <img id="icon" src={expanded ? minus : plus} alt="expand" onClick={() => setExpanded(!expanded)}/>
    </span>
    <span style={{
    textAlign: "justify",
    textWrap: 'wrap',
    display: expanded ? 'block' : 'none',
    height: expanded ? 'auto' : '0',
    overflow: 'hidden',
    transition: 'height 0.3s ease-in-out',
    }}>{answer}</span>
</span>
);
};
export default FAQItem