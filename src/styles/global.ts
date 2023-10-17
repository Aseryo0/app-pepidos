import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width:1080px){
    font-size:90.75%
  }
    
@media (max-width:720px){
  font-size: 87.5%;
}
}
body{
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  -webkit-font-smoothing:antialiased;
}
body,input,select,textarea,button{
  font: 400 1rem 'roboto', helvetica,arial,sans-serif;
}
a{
  color: inherit;
  text-decoration: none;
}
button{
  cursor:pointer
  }
  ul, li {
    list-style: none;
  }
`
