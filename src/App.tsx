import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/auth.page';
import { ClientPage } from './pages/client.page';
import { ConversationPage } from './pages/conversation.page';
import MainPage from './pages/main.page';
import { MainLayout } from './layouts/main.layout';
import { AccountSettingsPage } from './pages/account-settings.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/client" element={<ClientPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            <Route path="/conversation" element={<ConversationPage />} />
          </Route>
          
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
