import Card from './Card';
import '../styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Card
        image="/mnt/data/card-image-2.png"
        title="Instituto Infnet"
        description="O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação de profissionais em Tecnologia da Informação, Negócios e para a Indústria Criativa."
        footer="Rua São José, 90 – Centro, Rio de Janeiro – RJ, 20010-020"
      />
    </div>
  );
}

export default App;