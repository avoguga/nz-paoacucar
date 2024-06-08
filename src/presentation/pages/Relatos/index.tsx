import * as C from './styles';
import Header from './components/Header';
import AllTestimonials, { CarouselItem } from './components/AllTestimonials';

import image1 from '../../../main/assets/images/background/depoimento-1.webp';

const relatosData: CarouselItem[] = [
  { id: 1, type: 'video', content: 'video-url-1', imageUrl: image1 },
  { id: 2, type: 'text', content: 'text-content-1', imageUrl: image1 },
  { id: 3, type: 'video', content: 'video-url-2', imageUrl: image1 },
  { id: 4, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 5, type: 'video', content: 'video-url-2', imageUrl: image1 },
  { id: 6, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 7, type: 'video', content: 'video-url-2', imageUrl: image1 },
  { id: 8, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 9, type: 'video', content: 'video-url-2', imageUrl: image1 },
  { id: 10, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 11, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 12, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 13, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 14, type: 'text', content: 'text-content-2', imageUrl: image1 },
  { id: 15, type: 'text', content: 'text-content-2', imageUrl: image1 },
];

const Relatos = () => {
  // const [testimonials, setTestimonials] = useState<CarouselItem[]>([]);

  /* 
  useEffect(() => {
      // Função para buscar os dados da API
      const fetchTestimonials = async () => {
        try {
          const response = await fetch('https://api.exemplo.com/depoimentos'); // Substitua pela URL da sua API
          const data = await response.json();
          setTestimonials(data);
        } catch (error) {
          console.error('Erro ao buscar depoimentos:', error);
        }
      };
  
      fetchTestimonials();
    }, []);
  */
  return (
    <C.Container>
      <Header />
      <br />
      <br />
      <C.TestimonialContent>
        <AllTestimonials items={relatosData} />
      </C.TestimonialContent>
    </C.Container>
  );
};

export default Relatos;
