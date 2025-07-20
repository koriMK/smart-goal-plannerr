import { useState } from 'react';

export default function AddGoalModal({ show, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    savedAmount: '0',
    category: '',
    deadline: ''
  });

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
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: parseFloat(formData.savedAmount)
    });
    setFormData({
      name: '',
      targetAmount: '',
      savedAmount: '0',
      category: '',
      deadline: ''
    });
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className="text-center mb-3">Add New Goal</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="goalName">Goal Name</label>
            <input 
              type="text" 
              id="goalName" 
              name="name"
              className="form-control" 
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetAmount">Target Amount ($)</label>
            <input 
              type="number" 
              id="targetAmount" 
              name="targetAmount"
              className="form-control" 
              required
              value={formData.targetAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="savedAmount">Initial Amount Saved ($)</label>
            <input 
              type="number" 
              id="savedAmount" 
              name="savedAmount"
              className="form-control" 
              value={formData.savedAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select 
              id="category" 
              name="category"
              className="form-control" 
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
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
            <label htmlFor="deadline">Deadline</label>
            <input 
              type="date" 
              id="deadline" 
              name="deadline"
              className="form-control" 
              required
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Add Goal</button>
          </div>
        </form>
      </div>
    </div>
  );
}