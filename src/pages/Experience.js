import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../img/techno.png";
import logo1 from "../img/Saeternus.png";
import { horiEleReveal, pageAnimation } from "../animation";

const Experience = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const string = " E x p e r i e n c e";
  const heading = string.split(" ");
  return (
    <Wrapper
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeadingWrapper>
        {heading.map((letter, index) => (
          <Heading
            variants={horiEleReveal}
            initial="hidden"
            animate="show"
            custom={index}
            key={index}
          >
            {letter}
          </Heading>
        ))}
      </HeadingWrapper>
      <ExperiencesWrapper>
        <Experience1
          onClick={() => {
            setIsClicked1(!isClicked1);
          }}
        >
          <Circle1> {/* <img src={logo1} alt="logo"></img>{" "} */}</Circle1>
     
             <h1> Software Developer Intern</h1>
                 <h2>Inforida</h2>
          <h3>   July 14, 2025 - Oct 14, 2025</h3>
        
            <a href="https://inforida.com/" target="_blank">Inforida</a>
         
          <motion.p style={{ display: isClicked1 && "contents" }}>
       
I worked as a Developer Intern at Inforida,
        where I helped build the company’s website and worked on their School ERP–based product. 
        I used Angular to develop a fast, responsive, and user-friendly application that works smoothly on mobile, tablet, and web devices.

During my internship, I focused on creating reusable components and writing clean,
 maintainable code. I also worked on improving UI performance and ensuring the application provides a consistent experience across different screen sizes.
  This experience helped me strengthen my frontend skills and understand how real-world products are developed and maintained.
          </motion.p>
        </Experience1>
        <Border></Border>
        <TimePeriod1> February 10, 2025 - March 21, 2025</TimePeriod1>
        <TimePeriod2> July 14, 2025 - Oct 14, 2025</TimePeriod2>
        <Experience2
          onClick={() => {
            setIsClicked2(!isClicked2);
          }}
        >
          <Circle2>{/* <img src={image} alt="logo"></img>{" "} */}</Circle2>
        <h1>Web Developer Intern</h1>
          <h2>edunet foundation </h2>
          <h3> February 10, 2025 - March 21, 2025</h3>
          <p style={{ display: isClicked2 && "contents" }}>
     I built a food delivery web application similar to Zomato with a clean, responsive, and user-friendly interface. The app includes features like restaurant listings, food menus, add-to-cart functionality, and order management.

I used React and JavaScript to build the frontend and handle user interactions. For managing application state across different users, I used Redux. The project focuses on performance, smooth navigation, and reusable React components to create a fast and scalable user experience.
          </p>
          
        </Experience2>
      </ExperiencesWrapper>
    </Wrapper>
  );
};

const TimePeriod1 = styled.b`
  grid-area: date1;
  font-size: 2rem;
  color: #c4c0c0;
  margin-top: 6rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TimePeriod2 = styled(TimePeriod1)`
  grid-area: date2;
  justify-self: end;
`;

const Wrapper = styled(motion.div)`
  background-color: #0e0f23;
  padding: 3rem 0rem;
`;

const HeadingWrapper = styled(motion.div)`
  width: fit-content;
  margin: auto;
  padding: 2rem 2rem;
  overflow: hidden;
`;

const Heading = styled(motion.h2)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #23d997;
`;

const ExperiencesWrapper = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "experience1 border date1"
    "date2 border experience2";
  grid-template-columns: 1fr 5px 1fr;
  /* grid-template-rows: 1fr 1fr; */
  gap: 4rem 8rem;
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    grid-template-areas:
      " border experience1"
      " border experience2";
    grid-template-columns: 5px auto;
    grid-template-rows: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: 3px auto;
    grid-template-rows: auto auto;
    padding: 2rem 2rem 2rem 3.5rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem 2rem 2rem;
    gap: 2rem 2rem;
  }
`;

const Experience1 = styled(motion.div)`
  background-color: rgb(29, 24, 54);
  grid-area: experience1;
  border: 2px solid black;
  border-radius: 3rem;
  margin-top: 2rem;
  padding: 2rem 3rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 30px rgba(235, 83, 83, 0.4);
  transition: 1s ease;
  &:hover {
    box-shadow: 0px 0px 30px rgba(33, 233, 187, 0.4);
  }
  h1 {
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1.3rem;
    padding-bottom: 2rem;
    color: rgb(255, 255, 255);
    @media (max-width: 1200px) {
      padding-bottom: 0.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
    @media (max-width: 350px) {
      padding-bottom: 0.5rem;
    }
  }
  h3 {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      padding-bottom: 2rem;
    }
  }
  p {
    padding-top: 0rem;
    padding-bottom: 0rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    transition: all 0.5s ease;
    @media (max-width: 1200px) {
      margin-top: 0rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 350px) {
    padding: 1rem 1rem;
    border-radius: 1rem;
  }
`;

const Border = styled(motion.div)`
  grid-area: border;
  background-color: whitesmoke;
  height: 100%;
  @media (max-width: 720px) {
    height: 100%;
  }
`;

const Circle1 = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  border: 5px solid white;
  border-radius: 50%;
  background-color: #46383c;
  position: absolute;
  overflow: hidden;
  right: -11.8rem;
  @media (max-width: 1200px) {
    right: 0;
    left: -11.8rem;
  }
  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    border: 2px solid white;
    left: -3.7rem;
  }
`;

const Circle2 = styled(Circle1)`
  right: 0rem;
  left: -12rem;
  background-color: #705549;
  @media (max-width: 1200px) {
    left: -11.8rem;
  }
  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    border: 2px solid white;
    left: -3.7rem;
  }
`;

const Experience2 = styled(Experience1)`
  grid-area: experience2;
`;

export default Experience;
