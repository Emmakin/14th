function Home() {
  return (
    <div>
      <h1 style={style.title}>
        Introducing <br />
        Nike Forward
      </h1>
      <div style={style.subtitle}>
        Made with an average 75% less carbon when compare to our traditional <br />
        knee fleece. Drapes, feel and wears like nothing you have experience before.
      </div>
      <div>
   
      </div>

    </div>
  );
}

const style = {
  title: {
    fontFamily: "Nike Futura",
    textTransform: "uppercase",
    fontSize: "72px",
    lineHeight: "60px",
    textAlign: "center",
    margin: "0 auto",
  },
  subtitle: {
    fontFamily: "Arial",
    textAlign: "center",
    marginTop: "2rem",
    text: "justify"
  }
};

export default Home;
