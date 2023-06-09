import React from 'react'

export const Login = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='card o-hidden border-0 shadow-lg my-5'>
          <div className='card-body p-0'>
            {/* Nested Row within Card Body */}
            <div className='row'>
              <div className='col-lg-12'>
                <div className='p-5'>
                  <div className='text-center'>
                    <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                  </div>
                  <form className='user'>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control form-control-user'
                        id='exampleInputEmail'
                        aria-describedby='emailHelp'
                        placeholder='Enter Email Address...'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control form-control-user'
                        id='exampleInputPassword'
                        placeholder='Password'
                      />
                    </div>
                    <div className='form-group'>
                      <div className='custom-control custom-checkbox small'>
                        <input type='checkbox' className='custom-control-input' id='customCheck' />
                        <label className='custom-control-label' htmlFor='customCheck'>
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <a href='index.html' className='btn btn-primary btn-user btn-block'>
                      Login
                    </a>
                    <hr />
                  </form>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
