import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme/Theme';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
