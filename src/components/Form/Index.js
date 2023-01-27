import { useContext } from 'react';
import { Context } from '../../context/SiteContext';


function Index() {

const { theme, setTheme} = useContext(Context);

const themeChange = () => {
    if (theme === "light") {
        setTheme("dark");
        document.body.setAttribute("data-theme", "dark");
    }
    else  {
        setTheme("light");
        document.body.setAttribute("data-theme", "light");
    }
}

  return (
    <>
        <header>
            <h1>Sign In</h1>
        </header>
        <main>
            <section>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit"> Sign In </button>
                </form>
                <div>
                    <a href="/"> Forgot Password? </a>
                </div>
            </section>
        </main>
        <footer>
            <button onClick={themeChange}> 
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </footer>
    </>
  )
}

export default Index