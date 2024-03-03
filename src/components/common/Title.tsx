import { styled } from "styled-components";
import { ColorKey, HeadingSize } from "../../styles/theme";

interface Props {
    children: React.ReactNode;
    size: HeadingSize;
    color?: ColorKey;
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
    font-size: ${({ theme, size }) => theme.heading[size]};
    color: ${({ theme, color }) =>
        color ? theme.color[color] : theme.color.primary};
`;
export default function Title({ children, size, color }: Props) {
    return (
        <TitleStyle size={size} color={color}>
            {children}
        </TitleStyle>
    );
}
