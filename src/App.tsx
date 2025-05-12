import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import WishPage from './Wish/Wish';
import Edit from './Edit/Edit';
import Last from './Last/Last';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/last" element={<Last />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
