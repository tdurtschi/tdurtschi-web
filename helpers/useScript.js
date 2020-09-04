import { useEffect } from 'react';

const useScript = (url, id) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = id

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;