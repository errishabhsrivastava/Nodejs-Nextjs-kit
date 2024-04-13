// pages/index.js

import React, { useState, useEffect } from 'react';

const HomePage = ({ name }) => {
  return (
    <div>
      <h1>Welcome to My Next.js App, {name}!</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default HomePage;

// Fetch data using getServerSideProps (Next.js pre-rendering function)
export async function getServerSideProps() {
  try {
    // Fetch data from backend API (GET /api/getName)
    const res = await fetch('http://localhost:5000/'); // Update URL as needed
    const data = await res.json();

    return {
      props: {
        name: data.name || '', // Pass name data to component
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        name: '', // Default to empty string if fetching fails
      },
    };
  }
}
