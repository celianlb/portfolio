import SocialComponents from "./Social";

export default function Footer() {
  return (
    <div className="pt-16">
      <footer className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <SocialComponents width={40} height={40} />
          <p className=" opacity-50 text-secondary font-rnssanz">
            © 2023 Célian Lebacle. All rights reserved.
          </p>
      </footer>
    </div>
  );
}