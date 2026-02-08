import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './valentine-styles.css';

export default function ValentineApp() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noClickCount, setNoClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);

  
  const gifUrlHappy = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWp3bDRmYnczdnRzM2htNjQ2NXU5MXBpZ3VwNHpxem0zemprd3E1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TjSPQgowhhJdHgvnwA/giphy.gif";
  const gifUrl = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JyaXR4cHY3aDhzOXRud201MTZmNnlnb2Y4cHlhZHhiM2R1eTR6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vRwmQ4az7ugWk/giphy.gif";

  const messages = [
    "Czy zostaniesz moja walentynką?",
    "Jesteś pewna? 🥺",
    "Naprawdę? 😢",
    "Może jednak tak? 😉",
    "Proszę? 🙏",
    "Ostatnia szansa! 😒",
    "Chyba sobie żartujesz! 😤",
    "NIE NO CO TY ROBISZ?! 😡",
    "POJEBAŁO CHYBA CIĘ LEKKO!!! 🤬" 
  ];

  const moveNoButton = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'transform 0.3s ease'
    });
  };

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const currentMessage = messages[Math.min(noClickCount, messages.length - 1)];

  if (answered) {
    return (
      <div className="success-screen d-flex align-items-center justify-content-center min-vh-100 p-4 overflow-hidden">
        {showConfetti && (
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb', '#ff4500'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>
        )}
        
        <div className="text-center animate-bounce-in">
          {gifUrlHappy && (
            <div className="mb-4">
              <div className="display-1 mb-4 animate-pulse">BUZI😘😘😘</div>
              <img 
                src={gifUrlHappy} 
                alt="Celebration GIF" 
                className="img-fluid rounded gif-image"
                style={{ maxWidth: '400px', maxHeight: '300px' }}
              />
            </div>
          )}
          
          
          <h1 className="display-2 fw-bold text-white mb-4 text-shadow">
            KOCHAM CIĘ! 
          </h1>
          <p className="display-6 text-white mb-5 text-shadow-sm">
            Nie brałem innej opcji pod uwagę. 🤪🤪🤪
          </p>
          <div className="d-flex gap-4 justify-content-center fs-1 animate-float">
            <span className="animate-bounce">❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.1s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.3s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.4s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.5s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.6s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.7s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.8s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.9s'}}>❤️</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-screen d-flex align-items-center justify-content-center min-vh-100 p-4">
      <div className="card card-main shadow-lg p-5 text-center">
        <div className="card-body">
          {gifUrl && (
            <div className="mb-4">
              <h1 className="display-4 fw-bold text-dark mb-3">
            {currentMessage}
          </h1>
              <img 
                src={gifUrl} 
                alt="Romantic GIF" 
                className="img-fluid rounded gif-image"
                style={{ maxWidth: '400px', maxHeight: '300px' }}
              />
            </div>
          )}
          
          <p className="lead text-muted mb-5 fst-italic">
            Strasznie chciałbym z Tobą spędzić ten wyjątkowy dzień! 😘
          </p>
          
          <div className="d-flex gap-4 justify-content-center align-items-center flex-wrap mb-4">
            <button
              onClick={handleYes}
              className="btn btn-yes btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
              style={{
                fontSize: `${20 + noClickCount * 4}px`,
                padding: `${24 + noClickCount * 4}px ${48 + noClickCount * 8}px`
              }}
            >
              Tak
            </button>
            
            <button
              onClick={moveNoButton}
              className="btn btn-no btn-lg rounded-pill px-4 py-2 fw-semibold shadow position-relative"
              style={noButtonStyle}
            >
              Nie
            </button>
          </div>
          
          {noClickCount > 2 && (
            <p className="text-danger fs-5 mt-4 animate-pulse">
              😏 Dobrze oboje wiemy, że chcesz powiedzieć TAK! 😏
            </p>
          )}
          
          <div className="mt-5 d-flex gap-3 justify-content-center fs-2">
                        <span className="animate-bounce">❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.1s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.3s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.4s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.5s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.6s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.7s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.8s'}}>❤️</span>
            <span className="animate-bounce" style={{animationDelay: '0.9s'}}>❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}