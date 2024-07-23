// import styled, { css } from "styled-components";

// const Row = styled.div`
//     display: flex;
//     ${props => props.type === 'horizontal' && css`
//         justify-content: space-between;
//         align-items: center;
//     `}
//     ${props => props.type === 'vertical' && css`
//         flex-direction: column;
//         gap: 1.6rem ;
//     `}
// `
// Row.defaultProps = {
//     type : 'vertical'
// }

// export default Row;
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  /* Default to horizontal layout */
  ${props =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      /* Ensure items are not wrapped */
      flex-wrap: nowrap;
    `}
  /* Vertical layout */
  ${props =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem; /* Using 'gap' for spacing between items in a column */
      align-items: flex-start; /* Align items to the start in a column layout */
    `}
`;

Row.defaultProps = {
  type: "vertical", // Default to vertical layout if type prop is not provided
};

export default Row;
