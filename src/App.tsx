import { BestArtists } from './components/BestArtists';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImageGallery } from './components/ImageGallery';
import { Info } from './components/Info';
import { Populares } from './components/Populares';
import { Presents } from './components/Presents';
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';

function App() {
  return (
    <>
      <SectionOne>
        <Header />
        <Presents />
        <ImageGallery />
      </SectionOne>
      <SectionTwo>
        <Info />
      </SectionTwo>
      <Populares />
      <BestArtists />
      <Footer />
    </>
  );
}

export default App;
