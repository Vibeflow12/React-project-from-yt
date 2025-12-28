import useLocalStorage from "./useLocalStorage";
import './styles.css';

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleOnToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <button className="btn" onClick={handleOnToggleTheme}>change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode;