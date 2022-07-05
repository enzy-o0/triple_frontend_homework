import { keyframes } from 'styled-components'

export const FadeInKeyFrame = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`