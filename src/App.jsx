import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './assets/styles/main.css';

function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, {
      ...newGoal,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }]);
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  const handleAddDeposit = (goalId, amount) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          savedAmount: goal.savedAmount + amount
        };
      }
      return goal;
    }));
  };

  return (
    <>
      <Navbar />
      <Hero onAddGoal={() => setShowAddModal(true)} />
      <Dashboard 
        goals={goals}
        onAddGoal={handleAddGoal}
        onDeleteGoal={handleDeleteGoal}
        onAddDeposit={handleAddDeposit}
      />
      <Footer />
    </>
  );
}

export default App;