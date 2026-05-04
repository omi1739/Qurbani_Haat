import { PhoneCall, Locate, Mail, HeartCrack, Heart,  } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import fb from "@/assets/fb.webp";
import insta from "@/assets/insta.webp";
import twit from "@/assets/twitter.png";
import yt from "@/assets/fb.webp";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content mt-auto">
      {/* Main Footer Content */}
      <div className="footer p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* About Section */}
        <div>
          <h3 className="footer-title text-lg font-bold mb-4">
            About QurbaniHaat
          </h3>
          <p className="text-sm leading-relaxed">
            QurbaniHaat is a modern livestock marketplace dedicated to
            connecting buyers with quality animals for Qurbani. We ensure
            transparency, quality assurance, and seamless booking experience for
            all users.
          </p>
          <div className="mt-4">
           <Link href={'/'}> <Image src={logo} alt="This is Logo" width={150} height={100}></Image></Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="footer-title text-lg font-bold mb-4">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg"><Locate></Locate></span>
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg"><PhoneCall></PhoneCall></span>
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm">+880 1700 000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg"><Mail></Mail></span>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm">
                  <Link
                    href={'/'}
                    className="link link-hover"
                  >
                    info@qurbanihat.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Quick Links */}
        <div>
          <h3 className="footer-title text-lg font-bold mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4 mb-6">
            <Link
              href={'/'}
              
              className="btn btn-circle btn-sm btn-ghost "
              title="Facebook"
            >
              <Image src={fb} alt="Facebook" ></Image>
            </Link>
            <Link
              href={'/'}
              
              className="btn btn-circle btn-sm btn-ghost "
              title="Twitter"
            >
              <Image src={twit} alt="Twitter" ></Image>
            </Link>
            <Link
              href={'/'}
             
              className="btn btn-circle btn-sm btn-ghost "
              title="Instagram"
            >
              <Image src={insta} alt="Instagram" ></Image>
            </Link>
            <Link
              href={'/'}
              
              className="btn btn-circle btn-sm btn-ghost "
              title="YouTube"
            >
              
            </Link>
          </div>

          {/* Quick Links */}
          <h4 className="footer-title text-sm font-semibold mb-3">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href={'/'} className="link link-hover text-sm">
              Home
            </Link>
            <Link href={'/all-animals'} className="link link-hover text-sm">
              All Animals
            </Link>
            <Link href={"/sign-in"} className="link link-hover text-sm">
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="divider my-0"></div>
      <div className="footer footer-center bg-base-200 text-base-content border-t p-4">
        <p className="text-sm flex">
          © {currentYear} QurbaniHaat. All rights reserved. | EID MUBARAK <Heart></Heart>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
