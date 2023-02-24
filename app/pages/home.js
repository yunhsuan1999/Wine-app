import Products from './components/ProductList';
import Footer from './components/Footer';
import { Component } from 'react';
import styled from 'styled-components';
import HeadLine from './components/HeadLine';
import Navbar from './components/NavBar';

const StyledHomePage = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: hidden;
  font-family: 'Lato', sans-serif;
`;

const StyledBackToTop = styled.div`
  background-image: url('./images/icon_back-to-top.svg');
  height: 40px;
  width: 40px;
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 30px;
  right: 30px;
  opacity: ${({ visible }) => (visible ? '.5' : '0')};
  transition: opacity 0.5s linear 0s;
  cursor: ${({ visible }) => (visible ? 'pointer' : '')};
  z-index: 100;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisible);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisible);
  }

  toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const { visible } = this.state;
    if (scrolled > 300) {
      this.setState({ visible: true });
    } else if (scrolled <= 300) {
      this.setState({ visible: false });
    }

    return visible;
  };

  scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <Navbar />
        <StyledHomePage>
          <StyledBackToTop
            visible={visible}
            onClick={() => this.scrollToTop()}
          />
          <HeadLine></HeadLine>
          <Products></Products>
        </StyledHomePage>
        <Footer />
      </>
    );
  }
}

export default HomePage;
