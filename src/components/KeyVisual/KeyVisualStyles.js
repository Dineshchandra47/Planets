import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
`;

export const Planet = styled(NavLink)`
position:absolute;
top:50%;
left:50%

&::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100px;
        transition: transform 300ms ease;
    }
`;


