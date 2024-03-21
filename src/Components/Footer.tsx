import { SocialIcon } from "react-social-icons"

function Footer() {
  return (
    <footer className="bg-gray-100 grid p-10 lg:p-20 lg:grid-cols-3">
      <div className="my-2">
        <p className="font-bold my-2">Eclipse</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae atque doloribus tempora impedit qui. Animi temporibus tempora error quisquam nam nostrum praesentium modi maxime mollitia provident reiciendis vitae.</p>
      </div>
      <div className="m-2">
        <p className="my-2 font-bold">Links</p>
        <ul className="flex flex-col md:space-x-2 md:flex-row">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sustainability</li>
        </ul>

        <div className="flex space-x-2 py-2">
          <SocialIcon url="https://instagram.com" network="instagram" style={{ height: 30, width: 30 }}/>
          <SocialIcon url="https://x.com" network="x" style={{ height: 30, width: 30 }}/>
          <SocialIcon url="https://facebook.com" network="facebook" style={{ height: 30, width: 30 }}/>
        </div>
        
      </div>
      <div className="p-2">
        <p className="font-bold my-2">Contact</p>
        <p>123 Retail Street, Manchester, M1 9LX</p>
        <p>0161 123 123</p>
        <p>contact@eclipse.com</p>
      </div>
    </footer>
  )
}

export default Footer