import { useRouter } from 'next/router';
import React, { MouseEventHandler } from 'react';

export const useOpenDayView = (date: string) => {
    const router = useRouter();

    const openDayView: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        router.push(`/${date}`)
    }

    return openDayView
};
