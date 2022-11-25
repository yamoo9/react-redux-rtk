import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation, Spinner } from 'components';

const TodoListPage = lazy(() => import('pages/TodoList'));
const BeverageListPage = lazy(() => import('pages/BeverageList'));
const BeverageDetailPage = lazy(() => import('pages/BeverageDetail'));
const SettingPage = lazy(() => import('pages/Setting'));
const ContactMainPage = lazy(() => import('pages/Contacts/Main'));
const ContactTablePage = lazy(() => import('pages/Contacts/Table'));
const ContactAddEditPage = lazy(() => import('pages/Contacts/AddEdit'));
const ContactInfoPage = lazy(() => import('pages/Contacts/Info'));

function App() {
  return (
    <>
      <Navigation
        navigationList={[
          { id: '/todo-list', text: 'Todo Link', to: '/todo-list' },
          { id: '/beverage-list', text: 'Beverage List', to: '/beverage-list' },
          { id: '/contacts', text: 'Contacts', to: '/contacts' },
          { id: '/setting', text: 'Setting', to: '/setting' },
        ]}
      />
      <Suspense fallback={<Spinner>페이지 로딩 중...</Spinner>}>
        <Routes>
          <Route path="/todo-list" element={<TodoListPage />} />
          <Route path="/beverage-list" element={<BeverageListPage />} />
          <Route path="/beverage/:id" element={<BeverageDetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/contacts" element={<ContactMainPage />}>
            <Route index element={<ContactTablePage />} />
            <Route path="add" element={<ContactAddEditPage />} />
            <Route path="edit/:id" element={<ContactAddEditPage />} />
            <Route path="info/:id" element={<ContactInfoPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/todo-list" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
