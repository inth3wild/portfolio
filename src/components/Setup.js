import styled from "styled-components";
import theme from "styled-theming";

const linkColor = theme.variants("mode", "variant", {
  default: { light: "red", dark: "#ffa7c4" },
});

const linkOpacity = theme.variants("mode", "variant", {
  default: { light: 0.4, dark: 0.7 },
});

const fontColor = theme.variants("mode", "variant", {
  default: { light: "hsla(0,0%,0%,0.9)", dark: "#FFF" },
});

const iconColor = theme.variants("mode", "variant", {
  default: { light: "#8a8a8a", dark: "#BB6B89" },
  javascript: { light: "#F0DB4F", dark: "#F0DB4F" },
  php: { light: "#787CB5", dark: "#474A8A" },
  python: { light: "#4B8BBE", dark: "#FFD43B" },
  mysql: { light: "#00758F", dark: "#F29111" },
  nodejs: { light: "#68A063", dark: "#3C873A" },
  vuejs: { light: "#34495E", dark: "#41B883" },
  instagram: { light: "#fb3958", dark: "#fb3958" },
  twitter: { light: "#1DA1F2", dark: "#1DA1F2" },
  github: { light: "#3E2C00", dark: "#F1502F" },
  laravel: { light: "#6C6C6C", dark: "#F05340" },
});

export const Span = styled.a`
  position: relative;
  color: ${fontColor};
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-family: "Akkurat-Light", sans-serif;
  font-weight: 900;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 4px;
    background: ${linkColor};
    position: absolute;
    right: 0;
    bottom: 3px;
    opacity: ${linkOpacity};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    bottom: 0;
    height: 2px;
  }
`;

export const LinkSpan = styled(Span)`
  font-size: 18px;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: -2px;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-color: transparent #b0bec5 transparent transparent;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    right: 0;
    bottom: 3px;
    transition: all 300ms ease-in-out;
  }
`;

export const NavLinks = styled(Span)`
  text-decoration: none;
  margin-left: 40px !important;

  &::after {
    right: 0;
    bottom: 3px;
  }

  &:hover::after {
    bottom: 0;
    height: 2px;
  }
`;

export const Folder = styled.li`
  color: ${fontColor};
  font-weight: bold;
  font-size: 20px;
  font-style: normal;
`;

export const Icons = styled.li`
  span i {
    color: ${iconColor};
    font-size: 46px;
    transition: opacity 0.3s ease;
    cursor: pointer;
    opacity: 0.7;
    margin-top: 10px;

    &:hover {
      opacity: 1;
    }
  }

  span {
    font-size: 14px;
    margin-top: 10px;
    font-style: normal;
    color: ${iconColor};
  }
`;

export const SVGs = styled.span`
  svg {
    width: 25px;
    margin-top: 20px;
    fill: ${iconColor};
    transition: opacity 0.3s ease;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;
