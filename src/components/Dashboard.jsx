import { useState } from 'react';
import StatCard from './StatCard';
import GoalCard from './GoalCard';
import AddGoalModal from './modals/AddGoalModal';
import './Dashboard.css';

export default function Dashboard({ goals, onAddGoal, onDeleteGoal, onAddDeposit }) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <main className="main-content">
      <div className="container">
        <section className="dashboard">
          <h2 className="section-title">Your Financial Dashboard</h2>
          
          <div className="stats-container">
            <StatCard title="Total Goals" value={goals.length.toString()} />
            {/* Add other stat cards as needed */}
          </div>

          <div className="goals-container">
            {goals.length > 0 ? (
              goals.map(goal => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  onDelete={() => onDeleteGoal(goal.id)}
                  onDeposit={(amount) => onAddDeposit(goal.id, amount)}
                />
              ))
            ) : (
              <div className="empty-state">
                <p>No goals added yet</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAddModal(true)}
                >
                  Add Your First Goal
                </button>
              </div>
            )}
          </div>

          <button 
            className="btn btn-primary mt-3"
            onClick={() => setShowAddModal(true)}
          >
            Add New Goal
          </button>
        </section>
      </div>

      <AddGoalModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={onAddGoal}
      />
    </main>
  );
}