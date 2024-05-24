import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  MDBFooter,
  MDBContainer,
//   MDBCol,
//   MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  const { user } = useAuthContext();
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>

            <MDBBtn type='button' outline color="light" rounded>
              {user ? `Welcome ${user.email}` : <Link to='/signup'>Sign up</Link>}
            </MDBBtn>

          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright---
        <Link to='/'><span className='text-white'>
          kumixblog.com
        </span></Link>
      </div>
    </MDBFooter>
  );
}