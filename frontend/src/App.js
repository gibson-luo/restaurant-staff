import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

function App() {

  const [day, setDay] = useState([]);
  const [type, setType] = useState([]);
  const [isCooks, setIsCooks] = useState([]);
  const [prev, setPrev] = useState([]);
  const [next, setNext] = useState([]);
  const [staff, setStaff] = useState([]);

  const fetchStaff = async (type, day) => {
    const res = await axios.get(`http://127.0.0.1:3001/getStaff?type=${type}&day=${day}`);
    const data = res.data;
    setDay(data.day);
    setType(data.type);
    setPrev(data.prev);
    setNext(data.next);
    setStaff(data.staff);
    setIsCooks(data.type === 'cooks');
    
  };

  const renderedStaff = Object.values(staff).map(item => {
    return (
        <li class="list-group-item">{item}</li>
    );
  });

  useEffect(() => {
    fetchStaff('cooks', 'monday');
  }, []);

  const handlePrev = async (e) => {
    e.preventDefault();
    fetchStaff(type, prev);
  };

  const handleNext = async (e) => {
    e.preventDefault();
    fetchStaff(type, next);
  }

  const handleCooks = async (e) => {
    e.preventDefault();
    fetchStaff('cooks', day);
  }

  const handleWaiters = async (e) => {
    e.preventDefault();
    fetchStaff('waiters', day);
  }



  return (
    <div className='container'>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">Staff App</span>
          </a>

          <div class="d-flex flex-wrap align-items-center fs-3 me-md-auto">
            <span class="fs-3">{_.capitalize(day)}</span>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" onClick={handleCooks} className={isCooks?'btn btn-primary':'btn btn-outline-primary'}>Cooks</button>
            <button type="submit" onClick={handleWaiters} className={isCooks?'btn btn-outline-primary':'btn btn-primary'}>Waiters</button>
          </div>
        </header>
      </div>

      <nav>
        <ul class="pagination">
          <li className={day === 'monday'?'disabled page-item':'page-item'}><a class="page-link" onClick={handlePrev} href="#">Previous</a></li>
          <li className={day === 'friday'?'disabled page-item':'page-item'}><a class="page-link" onClick={handleNext} href="#">Next</a></li>
        </ul>
      </nav>
      
      <ul class="list-group list-group-flush">
        {renderedStaff}
      </ul>

    </div>

    
    
  );
}

export default App;