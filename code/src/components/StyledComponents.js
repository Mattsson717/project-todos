import styled from "styled-components/macro"

// Header
export const HeaderContainer = styled.section`
  color: rgb(37, 37, 37);   
  background: #ffcc67;
  border-radius: 0 0 30px 30px;
`
export const HeaderBodyContainer = styled.section`
  color: #252525;
  border-radius: 2px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const LeftContainer = styled.div`
  padding: 0 1rem;
`
export const RigthContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: self-end;
`
export const ButtonHeader = styled.button`
  color: white;
  background: 	#252525;
  border: none;
  padding: 10px;
  margin: 10px 0;
  width: 70%;
  border-radius: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px #000000;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover, :focus {
    -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1) rotate(4deg);
  }
  
@media (min-width: 768px){
   font-size: 1.1rem;
}
@media (min-width: 992px) {
    font-size: 1.3rem;
}
`
export const HeaderMainTitle = styled.h1`
font-size: 1.7rem;
font-weight: 700;
margin: 0 10px;
text-align: start;
padding: 1rem 0 0.2rem 0;

@media (min-width: 768px){
   font-size: 2.2rem;
}
@media (min-width: 992px) {
    font-size: 2.5rem;
}
`
export const HeaderSubTitle = styled.h2`
font-size: 1rem;
font-weight: 400;
margin: 1.2rem 0 0 0;
@media (min-width: 768px){
   font-size: 1.3rem;
}
@media (min-width: 992px) {
    font-size: 1.5rem;
}
`

// Wrappers
export const MainSection = styled.section`
  margin: 0 auto;
  max-width: 650px;
`
export const FlexItem = styled.div`
  background: #646464;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0;
  padding: 5px;
  border: #969696 solid 2px;
  border-radius: 10px 10px 0 0;
  word-break: break-word;
  font-size: 16px;

  & .done {
    opacity: 0.7;
    text-decoration: line-through;
    font-style: italic;
    color: #ffcc67;
  }
 
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
      font-size: 1.3rem;
}
`
export const DateContainer = styled.div`
  display: flex;
  justify-content: end;
  background: #969696;
  padding: 0 5px;  
  border: #969696 solid 2px;
  border-radius: 0 0 10px 10px;
  font-size: 12px;
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
      font-size: 1.3rem;
}
`
export const EmptyTodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#646464;
  margin: 10px auto;
  
  border-radius: 10px;
  font-size: 16px;

  .empty-image {
    width: 50%;
    opacity: 0.2;
  }
  
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
      font-size: 1.3rem;
`
export const TodoContainer = styled.div`
  display: flex;
`

// TextInput
export const InputContainer = styled.div`
   display: flex;
   justify-content: center;
   background: #969696;
   margin: 10px auto;
   
   padding: 5px;
   align-items: center;
   border: #c8c8c8 solid 2px;
   border-radius: 10px;
`
export const TextInput = styled.input`
  border: none;
  padding: 0.5em 1em;
  font-size: 16px;
  border-radius: 10px 0 0 10px;
  background: #646464;
  color: #ddd;
  outline: none;
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
     font-size: 1.3rem;
  }
`
export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover {
    -webkit-transform: scale(1.5) rotate(10deg);
    transform: scale(1.5) rotate(10deg);
  }

  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
      font-size: 1.3rem;
}
`

// Checkbox
export const TodoLabel = styled.label `
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  
  .task-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ccc;
    border: solid gray 2px;
    border-radius: 4px;
  }
  & .task-input:checked ~ .checkmark {
    background-color: #ffcc67;
  }
   .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  & .task-input:checked ~ .checkmark:after {
    display: block;
  }
  & .checkmark:after {
    left: 0.4rem;
    top: 0.2rem;
    width: 6px;
    height: 10px;
    border: solid white 2px;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

   @media (min-width: 768px){
       font-size: 0.9rem;
   }
   @media (min-width: 992px) {
       font-size: 1.1rem;
   }
`

// Buttons
export const InputButton = styled.button`
  border: none;
  padding: 0.5em 1em;
  font-size: 16px;
  border-radius:  0 10px 10px 0;
  background: rgb(37, 37, 37);
  color: #ddd;
  cursor: pointer;

 @media (min-width: 768px){
  font-size: 1.1rem;
  }
  @media (min-width: 992px) {
   font-size: 1.3rem;
  }
`
export const AddTodoButton = styled.button `
  padding: 0.7em 1.5em;
  border: 2px solid #ffcc67;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  color: #ddd;
  transition: .3s;
  z-index: 1;
  font-family: inherit;
  color: #ffcc67;

  &::before {
  content: '';
  width: 0;
  height: 300%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #ffcc67;
  transition: .5s ease;
  display: block;
  z-index: -1;
  }

  &:hover::before {
  width: 105%;
  }

  &:hover {
  color: #111;
  }
`
// Footer
export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  font-size: 12px;
`
export const Icon = styled.a`
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  width: 18px;
  filter: grayscale(100%) contrast(50%);
` 
export const FooterText = styled.h4`
  color: #ddd;
  padding: 14px 0 0 60px;
`
export const Image = styled.img`
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  width: 18px;
  filter: grayscale(100%) contrast(50%);
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`





  