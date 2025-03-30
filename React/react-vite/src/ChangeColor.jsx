import React, { useRef } from 'react';

const ChangeColor = () => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (buttonRef.current) {
            buttonRef.current.style.backgroundColor =
                buttonRef.current.style.backgroundColor === 'blue' ? 'red' : 'blue';
        }
    };

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick} style={{ backgroundColor: 'red' }}>
                Click
            </button>
        </div>
    );
};

export default ChangeColor;
