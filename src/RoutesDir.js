import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import acessiblePages from './actions/acessiblePages';
import {useState} from "react";
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js";

const StyledApp = styled.div`

`;

function RoutesDir() {
  const [theme, setTheme] = useState('dark'),
    themeToggler = (elem) => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      elem.classList.remove(theme);
      elem.classList.add(theme === 'dark' ? 'light' : 'dark');
    };

  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage themeToggler={themeToggler} theme={theme}/>}/>
          {acessiblePages.map(({toLink, Element, exact = !1}, ind) => <Route key={ind} path={toLink} element={<Element themeToggler={themeToggler} theme={theme}/>} exact={exact}/>)}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    </StyledApp>
  </ThemeProvider>
}

export default RoutesDir;