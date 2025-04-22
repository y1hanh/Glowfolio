import React, { useEffect, useState } from "react";

export function TypedText({ fullText }: { fullText: string }) {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedText.length < fullText.length) {
      timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
    } else if (!isDeleting && typedText.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length - 1));
      }, 30);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <div className="text-white whitespace-pre">
      <span className="text-green-400">{typedText}</span>
      <span className="animate-pulse text-white">|</span>
    </div>
  );
}
