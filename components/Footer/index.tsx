import Link from "next/link";

function Footer (){

    return(
        <footer className="footer w-lg-75 mx-auto py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2022 Avocados. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                       
                        <ul className='nav d-flex'>
                            <li className='nav-item'>
                                <Link href='https://erickperez.dev'>
                                <a className='nav-link' > Erick Pérez Rayo </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link  href='/about'>
                                    <a className='nav-link'> Proyecto</a>
                                </Link>   
                            </li>
                            <li className='nav-item'>
                            <Link  href='/random'>
                                    <a className='nav-link'> Random</a>
                                </Link>
                            </li> 
                        </ul>
                      </div>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;