function App() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <Navbar />
          <div style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default ;
  

  function App() {
    return (
      <Router>
        <MyNavbar />
        <div style={{ marginTop: "80px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default;

  <div className="hoverr navimg contact" ><img style={{width:20}} src="public/bxl-whatsapp.svg"/></div>