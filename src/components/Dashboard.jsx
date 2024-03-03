import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from '../Utils/Topbar';
import Sidebar from '../Utils/Sidebar';
import img from "../Assets/pti.jpg"
import img1 from "../Assets/pmln.jpg"
const Dashboard = () => {
  const { state } = useLocation();
  const [voteCountCandidate1, setVoteCountCandidate1] = useState(0);
  const [voteCountCandidate2, setVoteCountCandidate2] = useState(0);

  const handleVoteForCandidate1 = () => {
    setVoteCountCandidate1(voteCountCandidate1 + 1);
  };

  const handleVoteForCandidate2 = () => {
    setVoteCountCandidate2(voteCountCandidate2 + 1);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '40px' }}>
        <h2>Voting Screen</h2>
        <h3>{state?.name}</h3>

        <h3>Candidates:</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ ...candidateCardStyles }}>
            <h4>Pakistan Tehreek Insaf</h4>
            <img
              src={img}
              alt="Candidate 1"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <p>Vote Count: {voteCountCandidate1}</p>
            <button onClick={handleVoteForCandidate1} style={voteButtonStyles}>
              Vote for PTI
            </button>
          </div>
          <div style={{ marginLeft: '20px', ...candidateCardStyles }}>
            <h4>Pakistan Muslim Leaque N </h4>
            <img
              src={img1}
              alt="Candidate 2"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <p>Vote Count: {voteCountCandidate2}</p>
            <button onClick={handleVoteForCandidate2} style={voteButtonStyles}>
              Vote for PMLN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const candidateCardStyles = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  width: '450px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const voteButtonStyles = {
  marginTop: '10px',
  padding: '8px',
  fontSize: '14px',
  backgroundColor: '#007BFF',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Dashboard;
