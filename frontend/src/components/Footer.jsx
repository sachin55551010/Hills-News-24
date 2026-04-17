export const Footer = () => {
  return (
    <footer className="shadow-[0px_0px_10px_rgba(0,0,0,.5)] border-base-300 px-8 py-8 text-sm text-base-content/70">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        {/* Brand / About */}
        <div>
          <h3 className="font-semibold text-base-content mb-2">
            Hills News 24
          </h3>
          <p className="text-xs">
            Local news platform delivering the latest updates from Himachal
            Pradesh and nearby regions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-base-content mb-2">Contact</h3>
          <p>Email: hillsnews24@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Kandaghat, Solan, Himachal Pradesh</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-base-content/50 mt-8">
        © {new Date().getFullYear()} Hills News 24. All rights reserved.
      </div>
    </footer>
  );
};
