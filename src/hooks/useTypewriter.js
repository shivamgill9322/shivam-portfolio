import { useEffect, useMemo, useState } from 'react';

export function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
  const safeWords = useMemo(() => (words?.length ? words : ['Developer']), [words]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[index % safeWords.length];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === currentWord.length) {
          setDeleting(true);
          return;
        }

        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((value) => value + 1);
          return;
        }

        setSubIndex((value) => value + (deleting ? -1 : 1));
      },
      !deleting && subIndex === currentWord.length ? pause : deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [deleting, deletingSpeed, index, pause, safeWords, subIndex, typingSpeed]);

  return safeWords[index % safeWords.length].slice(0, subIndex);
}
