import {useState, useCallback, useEffect} from "react";

const useStorage = (key, defaultValue) => {
    const [state, setState] = useState({
        hydrated: false,
        storageValue: defaultValue,
    });
    const {hydrated, storageValue} = state;

    const getStorageValue = useCallback(() => {
        let value = defaultValue;
        let fromStorage = null;
        try {
            fromStorage = localStorage.getItem(key);
        } catch {} finally {
            if (fromStorage) {
                value = JSON.parse(fromStorage);
            }
            setState({
                hydrated: true,
                storageValue: value,
            });
        }
    }, [key, defaultValue]);

    const updateStorage = useCallback(
        (newValue) => {
            try {
                if (newValue === null) {
                    localStorage.removeItem(key);
                    setState({
                        hydrated: true,
                        storageValue: defaultValue,
                    });
                } else {
                    const stringifiedValue = JSON.stringify(newValue);
                    localStorage.setItem(key, stringifiedValue);
                    getStorageValue();
                }
            } catch {}
        },
        [defaultValue, getStorageValue, key],
    );

    useEffect(() => {
        getStorageValue();
    }, [getStorageValue]);

    return [storageValue, updateStorage, hydrated];
};

export default useStorage;