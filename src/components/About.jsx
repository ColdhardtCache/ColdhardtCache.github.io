import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the external URL
    window.location.href = 'https://medium.com/hack-diversity-movement/cohort-stories-meet-brian-g-5f09a798a59f';
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-center">
        If you are not redirected automatically,{' '}
        <a
          href="https://medium.com/hack-diversity-movement/cohort-stories-meet-brian-g-5f09a798a59f"
          className="text-blue-500 underline"
        >
          click here
        </a>.
      </p>
    </div>
  );
}

export default About;

