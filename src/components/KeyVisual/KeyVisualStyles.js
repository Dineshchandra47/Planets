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
`