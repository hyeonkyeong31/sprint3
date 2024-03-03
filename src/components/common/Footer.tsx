import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const FooterStyle = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    border-top: 1px solid ${({ theme }) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .logo {
        img {
            width: 90px;
        }
    }

    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <h1 className="logo">
                <img src={logo} alt="" />
            </h1>
            <div className="copyright">
                <p>copyright(c), 2024, book store.</p>
            </div>
        </FooterStyle>
    );
}
