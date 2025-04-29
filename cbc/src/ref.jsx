import { useRef } from 'react';

function ScrollToBottom() {
  const bottomRef = useRef(null);

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ height: '200px', overflow: 'auto', border: '1px solid black' }}>
      <div style={{ height: '600px' }}>
        Scroll me...
        <div ref={bottomRef}>👋 You reached the bottom!</div>
      </div>
      <button onClick={scrollDown}>Scroll Down ⬇️</button>
    </div>
  );
}

export default ScrollToBottom;
