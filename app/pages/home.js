import Products from './components/ProductList';
import Footer from './components/Footer';
import { Component } from 'react';
import styled from 'styled-components';
import HeadLine from './components/HeadLine';
import Navbar from './components/NavBar';

const StyledHomePage = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
`;

const StyledHomeTab = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({visible}) => (visible ? '#ffffff' : '#870000')};
  position: sticky;
  top: -1px;
  z-index: 1000;
  grid-column-gap: 70px;
  font-size: 16px;
  font-weight: 500;
  font-family: NotoSansTC;
  letter-spacing: 1px;

  @media (max-width: 1200px) {
    background-color: #870000;
  }

  @media (max-width: 576px) {
    grid-column-gap: 24px;
    font-size: 14px;
  }
`;

const StyledHomeTabButton = styled.a`
  color: ${({visible}) => (visible ? '#870000' : '#ffffff')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #d07f2d;
  }

  @media (max-width: 1200px) {
    color: #ffffff;
  }

  @media (max-width: 576px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

const StyledBackToTop = styled.img`
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

  @media (max-width: 576px) {
    height: 35px;
    width: 35px;
    right: 20px;
    bottom: 20px;
  }
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: ''
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
    if (scrolled > 500) {
      this.setState({ visible: true });
    } else if (scrolled <= 500) {
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

  scrollTo = (position) => {
    this.setState({ position: position });
    let top =
      document.getElementById(`${position}`).offsetTop -
      document.getElementById('tab').offsetHeight -
      10;

    window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { visible } = this.state;
    const tabText = [
      {
        button: '氣泡酒',
        anchor: 'sparkling'
      },
      {
        button: '葡萄酒',
        anchor: 'wine'
      },
      {
        button: '威士忌',
        anchor: 'whiskey'
      }
    ];
    return (
      <>
        <StyledHomePage>
          <Navbar />
          <StyledBackToTop
            src='./images/icon_back-to-top.svg'
            alt='top'
            visible={visible}
            onClick={() => this.scrollToTop()}
          />
          <HeadLine />
          <StyledHomeTab id="tab" visible={visible}>
            {tabText.map((item) => (
              <StyledHomeTabButton
                visible={visible}
                onClick={() => {
                  this.scrollTo(item.anchor);
                }}
                key={item.anchor}
              >
                {item.button}
              </StyledHomeTabButton>
            ))}
          </StyledHomeTab>
          <Products></Products>
        </StyledHomePage>
        <Footer />
      </>
    );
  }
}

export default HomePage;
