import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-300 text-black p-8">
      <div className="flex flex-wrap justify-between">
        <div className="mb-4">
          <h2 className="font-bold mb-2">Lovha</h2>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            molestias?
          </p>
          <div className="flex space-x-4"></div>
        </div>

        <div className="mb-4">
          <ul className="flex flex-row">
            <li className="mb-2">Link</li>
            <li className="mb-2">Link</li>
            <li className="mb-2">Link</li>
          </ul>
          {/* Add under links */}
        </div>

        <div className="mb-4">
          <p>Addresse</p>
          <p>Email</p>
        </div>
      </div>
      <hr className="my-4 border-gray-600" />
      <div className="text-center">
        <p>&copy; 2024 Lovha Studio. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
