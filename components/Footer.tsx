import Link from "next/link";

import redesSociales from "@/const/redesSociales";

export default function Example({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {redesSociales.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <a className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 Mararungye. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
