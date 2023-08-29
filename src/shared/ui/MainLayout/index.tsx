import { FCPWC } from 'shared/types/types';
import { Header } from 'shared/ui/Header';
import { Footer } from 'shared/ui/Footer';

export const MainLayout: FCPWC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
