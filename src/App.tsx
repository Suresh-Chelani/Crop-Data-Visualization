import { MantineProvider } from '@mantine/core';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { AnalyticsSection } from './components/analytics/AnalyticsSection';
import { Footer } from './components/layout/Footer';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <AnalyticsSection />
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;