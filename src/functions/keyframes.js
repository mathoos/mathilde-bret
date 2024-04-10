import { keyframes } from "@emotion/react";

export const rotateRightVolet = keyframes`
    from {
        transform : rotate(0deg) translateY(0) translateX(0);
    }

    to {
        transform : rotate(-3deg) translateY(-25px) translateX(-25px);
    }
`;

export const rotateRight = keyframes`
    from {
        transform: rotate(5deg)
    }

    to {
        transform: rotate(0)
    }
`;

export const scaleAnimation = keyframes`
    from {
        transform: scale(1.15)
    }

    to {
        transform: scale(1)
    }
`;

export const scaleInvert = keyframes`
    from {
        transform: scale(.85)
    }

    to {
        transform: scale(1)
    }
`;

export const bottomAnimation = keyframes`
    from {
        transform : translateY(50%);
        opacity : 0;
    }

    to {
        transform : translateY(0);
        opacity : 1;
    }
`;

export const rightAnimation = keyframes`
    from {
        transform : translateX(50%);
        opacity : 0;
    }

    to {
        transform : translateX(0);
        opacity : 1;
    }
`;

export const leftAnimation = keyframes`
    from {
        transform : translateX(-50%);
        opacity : 0;
    }

    to {
        transform : translateX(0);
        opacity : 1;
    }
`;