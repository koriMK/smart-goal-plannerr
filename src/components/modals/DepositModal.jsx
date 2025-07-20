import { useState } from 'react';

export default function DepositModal({ 
  show, 
  goals, 
  selectedGoalId, 
  onClose, 
  onSubmit 
}) {
  const [amount, setAmount] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(selectedGoalId || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedGoal || !amount) return;
    
    onSubmit(selectedGoal, parseFloat(amount));
    setAmount('');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className="text-center mb-3">Make a Deposit</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="depositGoal">Select Goal</label>
            <select
              id="depositGoal"
              className="form-control"
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              required
            >
              <option value="">Select a goal</option>
              {goals.map(goal => (
                <option key={goal.id} value={goal.id}>
                  {goal.name} (${goal.targetAmount - goal.savedAmount} remaining)
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="depositAmount">Amount ($)</label>
            <input
              type="number"
              id="depositAmount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Add Deposit</button>
          </div>
        </form>
      </div>
    </div>
  );
}