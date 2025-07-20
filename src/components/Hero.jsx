import './Hero.css';
export default function Hero({ onAddGoal }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Tiki's Financial Freedom</h1>
        <p>Take control of your finances and achieve your dreams with our powerful planning tool.</p>
        <button 
          id="getStartedBtn"
          className="cta-button" 
          onClick={onAddGoal}
        >
          Get Started
        </button>
      </div>
    </section>
  )
}