import React from 'react';
import Noticia from './components/Noticia';
import './App.css';

function App() {
  const noticia = [
    {
      id: 1,
      avatar: '/public/avatar01.png',
      titulo: 'Noticia 1',
      fecha: '19 de octubre de 2024',
      imagen: '/public/sky.jpg',
      descripcion: 'Esta es la descripción de la noticia 1 para la recuperación del tema 1.',
      likes: 25,
    },
    {
      id: 2,
      avatar: '/public/avatar02.png',
      titulo: 'Noticia 2',
      fecha: '19 de octubre de 2024',
      imagen: '/public/sea.jpg',
      descripcion: 'Esta es la descripción de la noticia 2 para la recuperación del tema 1.',
      likes: 16,
    },
    {
      id: 3,
      avatar: '/public/avatar03.png',
      titulo: 'Noticia 3',
      fecha: '19 de octubre de 2024',
      imagen: '/public/tux.jpg',
      descripcion: 'Esta es la descripción de la noticia 3 para la recuperación del tema 1.',
      likes: 169,
    },
    {
      id: 4,
      avatar: '/public/avatar04.png',
      titulo: 'Noticia 4',
      fecha: '19 de octubre de 2024',
      imagen: '/public/mario.jpg',
      descripcion: 'Esta es la descripción de la noticia 4 para la recuperación del tema 1.',
      likes: 253,
    },
    {
      id: 5,
      avatar: '/public/avatar05.png',
      titulo: 'Noticia 5',
      fecha: '04 de diciembre de 2024',
      imagen: '/public/kirby.jpg',
      descripcion: 'Esta es la descripción de la noticia 5 para la recuperación del tema 1.',
      likes: 116,
    },
    {
      id: 6,
      avatar: '/public/avatar06.png',
      titulo: 'Noticia 6',
      fecha: '19 de diciembre de 2024',
      imagen: '/public/zelda.jpeg',
      descripcion: 'Esta es la descripción de la noticia 6 para la recuperación del tema 1.',
      likes: 269,
    }
  ];

  return (
    <div className="App">
      <div className="noticia-container">
        {noticia.map(noticia => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
}

export default App;
