import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matchMedia, setMatchMedia] = useState<boolean>(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatchMedia(media.matches);

    const mediaListener = () => setMatchMedia(media.matches);
    media.addEventListener("change", mediaListener);
    return () => window.removeEventListener("change", mediaListener);
  }, [query]);

  return matchMedia;
};

export default useMediaQuery;
