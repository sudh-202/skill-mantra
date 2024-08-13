import { NAV_LINKS, Coursesdata } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={310} height={100} loading="lazy" />
      </Link>

      <div className="lg:flexCenter hidden gap-4">
        <ul className="hidden h-full gap-12 lg:flex mr-10">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative">
              {link.key === 'courses' ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-blue-90 text-xl flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
                    {link.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuSeparator />
                    {Coursesdata.map((course) => (
                      <DropdownMenuItem key={course.slug}>
                        <Link href={`/course/${course.slug}`} className="text-black block px-4 py-2 hover:bg-gray-100">
                          {course.title}
                        </Link>

                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={link.href} className="text-blue-90 text-xl flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" className="border-2 border-blue-90 text-blue-90 text-lg">
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild className="border-2 border-[#FFC224] bg-[#FFC224] text-blue-90 text-lg">
          <Link href="/register">Register</Link>
        </Button>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
