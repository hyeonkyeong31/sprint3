import { styled } from "styled-components";

const HeaderStyle = styled.header`
    background-color: ${(props) => props.theme.color.background};
    h1 {
        color: ${(props) => props.theme.color.primary};
    }
`;

export default function Header() {
    return (
        <>
            <HeaderStyle>
                <h1>book store</h1>
            </HeaderStyle>
        </>
    );
}
