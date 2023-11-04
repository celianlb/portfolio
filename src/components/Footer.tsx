import SocialComponents from "./Social";

export default function Footer() {
  return (
    <div className="pt-8">
      <footer className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <SocialComponents width={48} height={48} />
          <p className=" text-secondary font-rnssanz">
            © 2023 Célian Lebacle. Tous droits réservés.
          </p>
      </footer>
    </div>
  );
}