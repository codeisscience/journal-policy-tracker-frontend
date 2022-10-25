/* eslint-disable max-len */
import React from 'react';

// Assets
import { landingpage } from '../../../config/content';

// Styles
import {
  SectionOne,
  CardContainer,
  Card,
  ImageHeader,
  Para1,
  SectionTwo,
  Div2,
  Div3,
  Para,
  Image2,
  SectionOH1,
  SectionTH2,
  SectionOH2,
  Para2,
} from './styles';

function LandingSection() {
  return (
    <>
      <SectionOne>
        <SectionOH1>{landingpage.section1.head}</SectionOH1>
        <CardContainer>
          {landingpage.section1.content.map(({ id, subhead, para, link }) => (
            <Card key={id}>
              <ImageHeader src={link} alt='' />
              <SectionOH2>{subhead}</SectionOH2>
              <Para1>{para}</Para1>
            </Card>
          ))}
        </CardContainer>
      </SectionOne>
      <SectionTwo>
        <Div2>
          <Para>
            <SectionTH2>{landingpage.section2.head}</SectionTH2>
            <Para2>{landingpage.section2.para}</Para2>
          </Para>
          <Image2 src={landingpage.section2.img.src} alt={landingpage.section2.img.alt} />
        </Div2>
        <Div3>
          <Image2 src={landingpage.section3.img.src} alt={landingpage.section3.img.alt} />
          <Para>
            <SectionTH2>{landingpage.section3.head}</SectionTH2>
            <Para2>{landingpage.section3.para}</Para2>
          </Para>
        </Div3>
      </SectionTwo>
    </>
  );
}

export default LandingSection;
