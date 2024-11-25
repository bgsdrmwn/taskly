import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { system } from "@chakra-ui/react/preset";

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
  <ChakraProvider value={system}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  );
}