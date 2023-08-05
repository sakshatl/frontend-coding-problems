export default function PaymentButton(props) {
  const { text, bgColor, textColor } = props;
  
  return (
    <button style={{ backgroundColor: bgColor, color: textColor, borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px', border: 'none' }}>
      {text}
    </button>
  )
}