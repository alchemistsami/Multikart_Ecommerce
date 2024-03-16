import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../Assets/CSS/Poster.css"

const Poster = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="partition2 row">
          <div className="col-md-6 mb-4">
            <a href="/left-sidebar/collection" style={{ position: 'relative', display: 'block' }}>
              <img src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner1.5d5f9c6f.jpg" alt="" className="img-fluid media" style={{ maxWidth: '100%', height: 'auto' }} />
              <div className="text-center div-text-wraper pd-l-2" style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
                <h4>10% off</h4>
                <h2>MEN</h2>
              </div>
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <a href="/left-sidebar/collection" style={{ position: 'relative', display: 'block' }}>
              <img src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner2.3b2448f3.jpg" alt="" className="img-fluid media" style={{ maxWidth: '100%', height: 'auto' }} />
              <div className="text-center div-text-wraper" style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
                <h4>10% off</h4>
                <h2>WOMEN</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Poster;