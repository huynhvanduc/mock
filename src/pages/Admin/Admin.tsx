import React from 'react'
//import './styles/sb-admin-2.min.css'
import logo from './logo.svg'

function Admin() {
  return (
    <div>
      <div id='wrapper'>
        <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
        
          <hr className='sidebar-divider my-0' />
          <li className='nav-item'>
            <a className='nav-link' href='index.html'>
              <i className='fas fa-fw fa-tachometer-alt' />
              <span>Dashboard</span>
            </a>
          </li>
          <hr className='sidebar-divider' />
          <div className='sidebar-heading'>Interface</div>
          <li className='nav-item'>
            <a
              className='nav-link collapsed'
              href='#'
              data-toggle='collapse'
              data-target='#collapseTwo'
              aria-expanded='true'
              aria-controls='collapseTwo'
            >
              <i className='fas fa-fw fa-cog' />
              <span>Components</span>
            </a>
            <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordionSidebar'>
              <div className='bg-white py-2 collapse-inner rounded'>
                <h6 className='collapse-header'>Custom Components:</h6>
                <a className='collapse-item' href='buttons.html'>
                  Buttons
                </a>
                <a className='collapse-item' href='cards.html'>
                  Cards
                </a>
              </div>
            </div>
          </li>
         
          <hr className='sidebar-divider' />
        </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* Main Content */}
          <div id='content'>
            {/* Topbar */}
            <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
              {/* Sidebar Toggle (Topbar) */}
              <form className='form-inline'>
                <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
                  <i className='fa fa-bars' />
                </button>
              </form>
              {/* Topbar Search */}
              <form className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control bg-light border-0 small'
                    placeholder='Search for...'
                    aria-label='Search'
                    aria-describedby='basic-addon2'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-primary' type='button'>
                      <i className='fas fa-search fa-sm' />
                    </button>
                  </div>
                </div>
              </form>
              {/* Topbar Navbar */}
              <ul className='navbar-nav ml-auto'>
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className='nav-item dropdown no-arrow d-sm-none'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='searchDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-search fa-fw' />
                  </a>
                  {/* Dropdown - Messages */}
                  <div
                    className='dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in'
                    aria-labelledby='searchDropdown'
                  >
                    <form className='form-inline mr-auto w-100 navbar-search'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control bg-light border-0 small'
                          placeholder='Search for...'
                          aria-label='Search'
                          aria-describedby='basic-addon2'
                        />
                        <div className='input-group-append'>
                          <button className='btn btn-primary' type='button'>
                            <i className='fas fa-search fa-sm' />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                {/* Nav Item - Alerts */}
                <li className='nav-item dropdown no-arrow mx-1'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='alertsDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-bell fa-fw' />
                    {/* Counter - Alerts */}
                    <span className='badge badge-danger badge-counter'>3+</span>
                  </a>
                  {/* Dropdown - Alerts */}
                  <div
                    className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='alertsDropdown'
                  >
                    <h6 className='dropdown-header'>Alerts Center</h6>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                      <div className='mr-3'>
                        <div className='icon-circle bg-primary'>
                          <i className='fas fa-file-alt text-white' />
                        </div>
                      </div>
                      <div>
                        <div className='small text-gray-500'>December 12, 2019</div>
                        <span className='font-weight-bold'>A new monthly report is ready to download!</span>
                      </div>
                    </a>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                      <div className='mr-3'>
                        <div className='icon-circle bg-success'>
                          <i className='fas fa-donate text-white' />
                        </div>
                      </div>
                      <div>
                        <div className='small text-gray-500'>December 7, 2019</div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                      <div className='mr-3'>
                        <div className='icon-circle bg-warning'>
                          <i className='fas fa-exclamation-triangle text-white' />
                        </div>
                      </div>
                      <div>
                        <div className='small text-gray-500'>December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                    </a>
                    <a className='dropdown-item text-center small text-gray-500' href='#'>
                      Show All Alerts
                    </a>
                  </div>
                </li>
                {/* Nav Item - Messages */}
                <li className='nav-item dropdown no-arrow mx-1'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='messagesDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-envelope fa-fw' />
                    {/* Counter - Messages */}
                    <span className='badge badge-danger badge-counter'>7</span>
                  </a>
                  {/* Dropdown - Messages */}
                  <div
                    className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='messagesDropdown'
                  >
                    <h6 className='dropdown-header'>Message Center</h6>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                      <div className='dropdown-list-image mr-3'>
                        <img className='rounded-circle' src='img/undraw_profile_1.svg' alt='...' />
                        <div className='status-indicator bg-success' />
                      </div>
                      <div className='font-weight-bold'>
                        <div className='text-truncate'>
                          Hi there! I am wondering if you can help me with a problem I've been having.
                        </div>
                        <div className='small text-gray-500'>Emily Fowler · 58m</div>
                      </div>
                    </a>
                    <a className='dropdown-item d-flex align-items-center' href='#'>
                      <div className='dropdown-list-image mr-3'>
                        <img className='rounded-circle' src='img/undraw_profile_2.svg' alt='...' />
                        <div className='status-indicator' />
                      </div>
                      <div>
                        <div className='text-truncate'>
                          I have the photos that you ordered last month, how would you like them sent to you?
                        </div>
                        <div className='small text-gray-500'>Jae Chun · 1d</div>
                      </div>
                    </a>
                  </div>
                </li>
                <div className='topbar-divider d-none d-sm-block' />
                <li className='nav-item dropdown no-arrow'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='userDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='mr-2 d-none d-lg-inline text-gray-600 small'>Douglas McGee</span>
                    <img className='img-profile rounded-circle' src='img/undraw_profile.svg' />
                  </a>
                  {/* Dropdown - User Information */}
                  <div
                    className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='userDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400' />
                      Profile
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400' />
                      Settings
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='fas fa-list fa-sm fa-fw mr-2 text-gray-400' />
                      Activity Log
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#' data-toggle='modal' data-target='#logoutModal'>
                      <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400' />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className='container-fluid'>
              <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                  <h6 className='m-0 font-weight-bold text-primary'>DataTables Example</h6>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <div id='dataTable_wrapper' className='dataTables_wrapper dt-bootstrap4'>
                      <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                          <div className='dataTables_length' id='dataTable_length'>
                            <label>
                              Show{' '}
                              <select
                                name='dataTable_length'
                                aria-controls='dataTable'
                                className='custom-select custom-select-sm form-control form-control-sm'
                              >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>{' '}
                              entries
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <table
                            className='table table-bordered dataTable'
                            id='dataTable'
                            width='100%'
                            cellSpacing={0}
                            role='grid'
                            aria-describedby='dataTable_info'
                            style={{ width: '100%' }}
                          >
                            <thead>
                              <tr role='row'>
                                <th
                                  className='sorting sorting_asc'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-sort='ascending'
                                  aria-label='Name: activate to sort column descending'
                                  style={{ width: '188.512px' }}
                                >
                                  Name
                                </th>
                                <th
                                  className='sorting'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label='Position: activate to sort column ascending'
                                  style={{ width: '315.9px' }}
                                >
                                  Position
                                </th>
                                <th
                                  className='sorting'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label='Office: activate to sort column ascending'
                                  style={{ width: '137.262px' }}
                                >
                                  Office
                                </th>
                                <th
                                  className='sorting'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label='Age: activate to sort column ascending'
                                  style={{ width: '65.9px' }}
                                >
                                  Age
                                </th>
                                <th
                                  className='sorting'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label='Start date: activate to sort column ascending'
                                  style={{ width: '132.375px' }}
                                >
                                  Start date
                                </th>
                                <th
                                  className='sorting'
                                  tabIndex={0}
                                  aria-controls='dataTable'
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label='Salary: activate to sort column ascending'
                                  style={{ width: '108.05px' }}
                                >
                                  Salary
                                </th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th rowSpan={1} colSpan={1}>
                                  Name
                                </th>
                                <th rowSpan={1} colSpan={1}>
                                  Position
                                </th>
                                <th rowSpan={1} colSpan={1}>
                                  Office
                                </th>
                                <th rowSpan={1} colSpan={1}>
                                  Age
                                </th>
                                <th rowSpan={1} colSpan={1}>
                                  Start date
                                </th>
                                <th rowSpan={1} colSpan={1}>
                                  Salary
                                </th>
                              </tr>
                            </tfoot>
                            <tbody>
                              <tr className='odd'>
                                <td className='sorting_1'>Airi Satou</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>33</td>
                                <td>2008/11/28</td>
                                <td>$162,700</td>
                              </tr>
                              <tr className='even'>
                                <td className='sorting_1'>Angelica Ramos</td>
                                <td>Chief Executive Officer (CEO)</td>
                                <td>London</td>
                                <td>47</td>
                                <td>2009/10/09</td>
                                <td>$1,200,000</td>
                              </tr>
                              <tr className='odd'>
                                <td className='sorting_1'>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>66</td>
                                <td>2009/01/12</td>
                                <td>$86,000</td>
                              </tr>
                              <tr className='even'>
                                <td className='sorting_1'>Bradley Greer</td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>41</td>
                                <td>2012/10/13</td>
                                <td>$132,000</td>
                              </tr>
                              <tr className='odd'>
                                <td className='sorting_1'>Brenden Wagner</td>
                                <td>Software Engineer</td>
                                <td>San Francisco</td>
                                <td>28</td>
                                <td>2011/06/07</td>
                                <td>$206,850</td>
                              </tr>
                              <tr className='even'>
                                <td className='sorting_1'>Brielle Williamson</td>
                                <td>Integration Specialist</td>
                                <td>New York</td>
                                <td>61</td>
                                <td>2012/12/02</td>
                                <td>$372,000</td>
                              </tr>
                              <tr className='odd'>
                                <td className='sorting_1'>Bruno Nash</td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>38</td>
                                <td>2011/05/03</td>
                                <td>$163,500</td>
                              </tr>
                              <tr className='even'>
                                <td className='sorting_1'>Caesar Vance</td>
                                <td>Pre-Sales Support</td>
                                <td>New York</td>
                                <td>21</td>
                                <td>2011/12/12</td>
                                <td>$106,450</td>
                              </tr>
                              <tr className='odd'>
                                <td className='sorting_1'>Cara Stevens</td>
                                <td>Sales Assistant</td>
                                <td>New York</td>
                                <td>46</td>
                                <td>2011/12/06</td>
                                <td>$145,600</td>
                              </tr>
                              <tr className='even'>
                                <td className='sorting_1'>Cedric Kelly</td>
                                <td>Senior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>22</td>
                                <td>2012/03/29</td>
                                <td>$433,060</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12 col-md-5'>
                          <div className='dataTables_info' id='dataTable_info' role='status' aria-live='polite'>
                            Showing 1 to 10 of 57 entries
                          </div>
                        </div>
                        <div className='col-sm-12 col-md-7'>
                          <div className='dataTables_paginate paging_simple_numbers' id='dataTable_paginate'>
                            <ul className='pagination'>
                              <li className='paginate_button page-item previous disabled' id='dataTable_previous'>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={0}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  Previous
                                </a>
                              </li>
                              <li className='paginate_button page-item active'>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={1}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  1
                                </a>
                              </li>
                              <li className='paginate_button page-item '>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  2
                                </a>
                              </li>
                              <li className='paginate_button page-item '>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={3}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  3
                                </a>
                              </li>
                              <li className='paginate_button page-item '>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={4}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  4
                                </a>
                              </li>
                              <li className='paginate_button page-item '>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={5}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  5
                                </a>
                              </li>
                              <li className='paginate_button page-item '>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={6}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  6
                                </a>
                              </li>
                              <li className='paginate_button page-item next' id='dataTable_next'>
                                <a
                                  href='#'
                                  aria-controls='dataTable'
                                  data-dt-idx={7}
                                  tabIndex={0}
                                  className='page-link'
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className='sticky-footer bg-white'>
            <div className='container my-auto'>
              <div className='copyright text-center my-auto'>
                <span>Copyright © Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
    </div>
  )
}
export default Admin
