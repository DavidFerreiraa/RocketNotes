import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isnew }) => $isnew? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, $isnew }) => $isnew? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({theme, $isnew}) => $isnew? theme.COLORS.ORANGE : theme.COLORS.RED}
        }
    }

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }
`;
