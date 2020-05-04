import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>
          I’m Devansh and I’m a Frontend Web engineer studying at BITS Pilani,
          India
        </h4>

        <Button as={AnchorLink} href="#contact">
          Get In Touch
        </Button>
      </Details>
      <Thumbnail>
        <img
          src={dev}
          alt="I’m Devansh and I’m a Frontend Web engineer studying at BITS Pilani, India"
        />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
