import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// Define the shape of the context value
type GlobalContextType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create the provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext in any component
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};