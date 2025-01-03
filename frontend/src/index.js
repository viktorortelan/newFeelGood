import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import InfoImovel from './pages/imovel';
import Contatos from './pages/contatos';
import Sobre from './pages/sobree';
import NotFound from './pages/notfound';
import TelaAdd from './pages/addimovel';
import GestaoImovel from './pages/gestao';
import Telalogin from './pages/telalogin';
import GestaoCliente from './pages/gestaoCliente';
import CadastroCliente from './pages/cadastroCliente';
import LoginCliente from './pages/loginCliente';
import TelaCliente from './pages/telaCliente';
import GestaoCorretor from './pages/gestaoCorretor';
import DashboardAdm from './pages/dashboardAdm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCorretor from './pages/loginCorretor';
import TelaCorretor from './pages/telaCorretor';
import AddCorretor from './pages/addCorretor';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [exibir, setExibir] = useState([]);

    return (
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover  
            theme="dark"
          />
            <Routes>
                <Route path='/' element={<Home exibir={exibir} />} />
                <Route path='/imovel/:id' element={<InfoImovel />} />
                <Route path='/contatos' element={<Contatos />} />
                <Route path='/sobree' element={<Sobre />} />
                <Route path='/addimovel' element={<TelaAdd setExibir={setExibir} />} />
                <Route path='/gestao' element={<GestaoImovel />} />
                <Route path='/telalogin' element={<Telalogin />} />
                <Route path='/gestaoCliente' element={<GestaoCliente />} />
                <Route path='/addimovel' element={<TelaAdd setExibir={setExibir} />} />
                <Route path='/cadastroCliente' element={<CadastroCliente/>} />
                <Route path='/loginCliente' element={<LoginCliente/>} />
                <Route path='/telaCliente' element={<TelaCliente/>} />
                <Route path='/gestaoCorretor' element={<GestaoCorretor />} />
                <Route path='/dashboardAdm' element={<DashboardAdm />} />
                <Route path='/loginCorretor' element={<LoginCorretor />} />
                <Route path='/telaCorretor' element={<TelaCorretor/>} />
                <Route path='/addCorretor' element={<AddCorretor/>} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
