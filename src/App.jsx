import { Toaster } from "sonner";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <AppRoutes />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
