import { useState, useEffect } from 'react';

export default function EditGoalModal({ show, goal, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  });

  useEffect(() => {
    if (goal) {
      setFormData({
        id: goal.id,
        name: goal.name,
        targetAmount: goal.targetAmount,
        category: goal.category,
        deadline: goal.deadline
      });
    }
  }, [goal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      targetAmount: parseFloat(formData.targetAmount)
    });
    onClose();
  };

  if (!show || !goal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className="text-center mb-3">Edit Goal</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={formData.id} />
          <div className="form-group">
            <label htmlFor="editGoalName">Goal Name</label>
            <input 
              type="text" 
              id="editGoalName" 
              name="name"
              className="form-control" 
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editTargetAmount">Target Amount ($)</label>
            <input 
              type="number" 
              id="editTargetAmount" 
              name="targetAmount"
              className="form-control" 
              required
              value={formData.targetAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editCategory">Category</label>
            <select 
              id="editCategory" 
              name="category"
              className="form-control" 
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Travel">Travel</option>
              <option value="Emergency">Emergency</option>
              <option value="Electronics">Electronics</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Education">Education</option>
              <option value="Shopping">Shopping</option>
              <option value="Retirement">Retirement</option>
              <option value="Home">Home</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="editDeadline">Deadline</label>
            <input 
              type="date" 
              id="editDeadline" 
              name="deadline"
              className="form-control" 
              required
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}