import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [dbValue, setDbValue] = useState(value)

    useEffect(() => {
        const Handler = setTimeout(() => setDbValue(value), delay)

        return () => clearTimeout(Handler)
    }, [value, delay])
    return dbValue
}

export default useDebounce;