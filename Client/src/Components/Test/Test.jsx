import React, { useContext , useState} from 'react'
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  const [ThemeContext, setThemeContext] = useState(React.Context(themes.light));
//   const ThemeContext = React.createContext(themes.light)
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    function toggle(theme){
        if(theme === React.createContext(themes.light))
            {
                setThemeContext(React.createContext(themes.dark));
            }
        else
            {
                setThemeContext(React.createContext(themes.light));
            }
    }
    
    return (
      <button style={{ background: theme.background, color: theme.foreground }} onClick={toggle}>
        I am styled by theme context!
      </button>
    );
  }

  export default App;