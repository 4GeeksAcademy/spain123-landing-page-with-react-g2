import gallobg from "../../img/gallolandinggod.png";
const HeroRooster = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${gallobg})`,
        minHeight: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
      className="container-fluid py-5 text-center d-flex align-items-center justify-content-center hero-section"
    >
      <div className="container">
        <h1 className="display-3 fw-bold text-white mb-4">
          {" "}
          Únete al team Gallo y empieza a pisar gallinas
        </h1>
        <p className="lead text-white mb-3">
          {" "}
          20% de aura de Gallo si te unes antes del 31 de diciembre
        </p>
        <button className="btn btn-primary btn-lg mt-3">
          {" "}
          Contacta ahora al gallo mayor
        </button>
      </div>
    </div>
  );
};

export default HeroRooster;
