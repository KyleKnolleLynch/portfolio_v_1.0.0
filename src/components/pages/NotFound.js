import React, { Fragment } from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <Fragment>
      <header>
        <Navbar title1='HOME' title2='PROFILE' linkName='/profile' />
      </header>
      <main>
        <section className='section-404'>
          <div>
            <p>
              404
              <span>404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Cursor />
    </Fragment>
  );
};

export default NotFound;
