export default function GoalCard({ goal, onDelete, onDeposit }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  
  return (
    <div className="goal-card">
      <div className="goal-header">
        <h3 className="goal-title">{goal.name}</h3>
        <span className="goal-category">{goal.category}</span>
      </div>
      
      <div className="goal-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="progress-text">
          <span>${goal.savedAmount} saved</span>
          <span>${goal.targetAmount - goal.savedAmount} to go</span>
        </div>
      </div>
      
      <div className="goal-actions">
        <button 
          className="btn btn-primary btn-small"
          onClick={() => {
            const amount = parseFloat(prompt("Enter deposit amount:"));
            if (amount) onDeposit(amount);
          }}
        >
          Deposit
        </button>
        <button 
          className="btn btn-danger btn-small" 
          onClick={() => onDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}