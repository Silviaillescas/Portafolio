function Home() {
  const imageUrl = process.env.PUBLIC_URL + '/port.webp'; // Asegúrate de que el nombre del archivo es correcto.
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  );
}

export default Home;
