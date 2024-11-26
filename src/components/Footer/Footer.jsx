import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 mt-sm-5 mt-2 mb-5'>
        <div className="row px-sm-5 px-3">
            <div className="col-sm-6 col-xs-12 col-md-2 mb-3">
                <h6 className='text-white fw-bold'>Company</h6>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">About</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Jobs</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">For the Record</a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-xs-12 col-md-2 mb-3">
                <h6 className='text-white fw-bold'>Communities</h6>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Communities</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">For Artists</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Developers</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Advertising</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Investors</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Vendors</a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-xs-12 col-md-2 ms-md-4 ms-lg-0 mb-3">
                <h6 className='text-white fw-bold'>Useful links</h6>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Support</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Free Mobile App</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0">Consumer rights</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-5 offset-lg-1 mb-3">
                <div className="d-flex w-100 justify-content-sm-end">
                    <ul className="list-unstyled d-flex footer-socials">
                        <li className="ms-sm-3">
                            <a href="#" className="link-dark">
                                <img src="./imgs/camera.png" 
                                alt="camera"
                                height={16}
                                width={16} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a href="#" className="link-dark">
                                <img src="./imgs/facebook.png" 
                                alt="camera"
                                height={16}
                                width={16} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a href="#" className="link-dark">
                                <img src="./imgs/twitter.png" 
                                alt="camera"
                                height={16}
                                width={16} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='text-white-50 mx-3 mx-sm-5'/>
        <div className="d-flex flex-wrap flex-sm-nowrap flex-sm-row justify-md-content-between px-3 px-sm-5 pt-2 pb-4 my-4">
            <ul className="list-unstyled d-flex footer-bottom flex-sm-nowrap flex-wrap">
                <li className="me-3 mb-3 mb-sm-0">Legal</li>
                <li className="me-3 mb-3 mb-sm-0">Privacy Center</li>
                <li className="me-3 mb-3 mb-sm-0">Privacy Policy</li>
                <li className="me-3 mb-sm-0">Cookie Settings</li>
                <li className="me-3 mb-sm-0">About Ads</li>
            </ul>
            <p className="text-white-50">© 2024 Vibez AB</p>
        </div>
    </footer>
  )
}

export default Footer