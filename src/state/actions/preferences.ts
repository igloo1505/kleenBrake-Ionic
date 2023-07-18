import { Preferences } from '@capacitor/preferences';

export const setPreference = async (key: string, value: string) => {
    await Preferences.set({
        key: key,
        value: value,
    });
};


export const getPreference = async (key: string) => {
    const { value } = await Preferences.get({ key: key });

    return value
};
