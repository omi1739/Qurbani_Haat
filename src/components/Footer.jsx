import Link from "next/link";


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
            <span className="text-2xl">🐄</span>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="footer-title text-lg font-bold mb-4">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm">+880 1700 000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">✉️</span>
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
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.326-.229-4.565-.229-4.814 0-8.333 2.937-8.333 8.333v1.896z"></path>
              </svg>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              title="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.69.188-1.45.155-2.212-.05.631 1.953 2.445 3.377 4.604 3.417-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.175c-3.674-3.175-9.556-3.175-13.229 0-3.674 3.174-3.674 8.32 0 11.494 3.673 3.175 9.556 3.175 13.229 0 3.674-3.174 3.674-8.32 0-11.494zm-1.586 10.454c-.919 2.521-3.279 4.244-6.009 4.244-3.306 0-6-2.694-6-6s2.694-6 6-6c2.73 0 5.09 1.723 6.009 4.244.441-1.289.702-2.657.823-4.052-1.01-1.697-2.88-2.862-5.002-2.862-4.418 0-8 3.582-8 8s3.582 8 8 8c2.122 0 3.992-1.165 5.002-2.862-.121-1.395-.382-2.763-.823-4.052z"></path>
              </svg>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              title="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <h4 className="footer-title text-sm font-semibold mb-3">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="link link-hover text-sm">
              Home
            </Link>
            <Link href="/all-animals" className="link link-hover text-sm">
              All Animals
            </Link>
            <Link href="/sign-in" className="link link-hover text-sm">
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="divider my-0"></div>
      <div className="footer footer-center bg-base-200 text-base-content border-t p-4">
        <p className="text-sm">
          © {currentYear} QurbaniHaat. All rights reserved. | Built with ❤️ for
          the community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
