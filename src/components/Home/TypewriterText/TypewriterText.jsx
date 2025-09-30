
import { useState, useEffect } from "react";

const TypewriterText = ({ texts = [], speed, deleteSpeed, loop, delay }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingTimeout;

        if (!isDeleting && charIndex < currentText.length) {
            // Typing characters
            typingTimeout = setTimeout(() => {
                setDisplayedText(prev => prev + currentText[charIndex]);
                setCharIndex(prev => prev + 1);
            }, speed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting characters
            typingTimeout = setTimeout(() => {
                setDisplayedText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            }, deleteSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            // Pause before deleting
            typingTimeout = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && charIndex === 0) {
            // Switch to next text
            setIsDeleting(false);
            setTextIndex(prev => (prev + 1) % texts.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay, loop]);

    return <span className="typewriter-text">{displayedText}</span>;
}

export default TypewriterText;