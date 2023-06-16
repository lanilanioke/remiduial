/*
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import CredentialsListPage from './components/pages/CredentialsListPage';
import AddCredentialsListPage from './components/pages/AddCredentialsListPage';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/credentials" element={<CredentialsListPage/>} />
        <Route path="/credentials/add" element={<AddCredentialsListPage/>} />
        <Route path="/credentials/:id/edit" element={<EditCredentialPag/>} />
        <Route path="*" element={<h1>Page Not Found </h1>} />

      </Routes>
      
    </div>
  );
}

export default App;
*/
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import CredentialsListPage from './components/pages/CredentialsListPage';
import AddCredentialsListPage from './components/pages/AddCredentialsListPage';
import EditCredentialPage from './components/pages/EditCredentialPage';







function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credentials" element={<CredentialsListPage />} />
        <Route path="/credentials/add" element={<AddCredentialsListPage />} />
        <Route path="/credentials/:id/edit" element={<EditCredentialPage />} />
        <Route path="/credentials/:id/edit" element={<EditCredentialPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

