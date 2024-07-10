import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Router from "./routes/routes";

function App() {
  return (
    <body className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </body>
  );
}

export default App;
