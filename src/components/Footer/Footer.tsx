import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-300 text-black">
      <div className="footer-wrapper wrapper">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <h2 className="font-bold mb-2">Lovha</h2>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, molestias?
            </p>
            <div className="flex space-x-4 pt-2">
              <FaGithub />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          <div className="mb-4">
            <nav>
              <ul className="flex flex-row space-x-10">
                <li className="mb-2">
                  Link
                  <ul className="pt-2 text-sm font-light">
                    <li className="mb-1">Sublink</li>
                    <li className="mb-1">Sublink</li>
                  </ul>
                </li>
                <li className="mb-2">
                  Link
                  <ul className="pt-2 text-sm font-light">
                    <li className="mb-1">Sublink</li>
                    <li className="mb-1">Sublink</li>
                  </ul>
                </li>
                <li className="mb-2">
                  Link
                  <ul className="pt-2 text-sm font-light">
                    <li className="mb-1">Sublink</li>
                    <li className="mb-1">Sublink</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mb-4">
            <p>Addresse</p>
            <p>Email</p>
          </div>
        </div>
        <hr className="my-3 border-gray-600" />
        <div className="text-center">
          <p>&copy; 2024 Lovha Studio. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
