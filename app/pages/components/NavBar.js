import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavbar = styled.div`
  background-color: #ffffff;
  width: 100%;
  margin: 6px 0;

  @media (max-width: 576px) {
    margin: 8px 0 20px 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const StyledNavbarLogo = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledNavbar>
      <StyledNavbarLogo
        onClick={() => router.push(`/`)}
        alt="logo"
        src="../images/logo.svg"
      />
    </StyledNavbar>
  );
};

export default Navbar;
