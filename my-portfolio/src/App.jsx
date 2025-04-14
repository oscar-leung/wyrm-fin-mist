function App() {
    return ( <
        div className = "bg-gray-900 text-white min-h-screen p-8" >
        <
        h1 className = "text-4xl font-bold mb-4" > Oscar Leung < /h1> <
        p className = "text-xl mb-8" > QA Engineer & SDET | Building cool things < /p>

        <
        h2 className = "text-2xl mb-2" > Projects < /h2> <
        ul className = "mb-8" >
        <
        li > < a className = "text-blue-400"
        href = "https://github.com/oscar-leung" > GitHub Portfolio < /a></li >
        <
        /ul>

        <
        h2 className = "text-2xl mb-2" > Contact < /h2> <
        p > Email: oscarleung1 @gmail.com < /p> <
        p > LinkedIn: < a className = "text-blue-400"
        href = "https://linkedin.com/in/oscar-leung" > linkedin.com / in /oscar-leung</a > < /p> <
        /div>
    );
}

export default App;