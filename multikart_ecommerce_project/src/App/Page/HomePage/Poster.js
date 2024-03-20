import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../Assets/CSS/Poster.css"

const Poster = ({poster}) => {
  

  return (
    <section className="pb-0">
      <div className="container">
        <div className="partition2 row">
          {
            poster.map((poster) =>
              <div className="col-md-6 mb-4">
                <a href="/left-sidebar/collection"
                  style={{
                    position: 'relative',
                    display: 'block'
                  }}>
                  <img src={poster.src}
                    alt=""
                    className="img-fluid media"
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }} />
                  <div
                    className="text-center div-text-wraper pd-l-2"
                    style={{
                      position: 'absolute', top: '50%', left: '70%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff'
                    }}>
                    <h4>{poster.offer}</h4>
                    <h2>{poster.title}</h2>
                  </div>
                </a>
              </div>
            )}

          {/* <div className="col-md-6 mb-4">
            <a
              href="/left-sidebar/collection"
              style={{ position: 'relative', display: 'block' }}>
              <img
                src={poster[1].src}
                alt="" className="img-fluid media"
                style={{ maxWidth: '100%', height: 'auto' }} />
              <div
                className="text-center div-text-wraper"
                style={{
                  position: 'absolute',
                  top: '50%', left: '70%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff'
                }}>
                <h4>{poster[1].offer}</h4>
                <h2>{poster[1].title}</h2>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default Poster;