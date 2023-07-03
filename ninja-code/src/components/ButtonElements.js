import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#C766FF' : '#C766FF')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '#010606' : '#fff')};
    padding: 20px;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '20px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-left: px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000000;
        background: ${({ primary }) => (primary ? '#fff' : '#F4D03F')};


    }

`