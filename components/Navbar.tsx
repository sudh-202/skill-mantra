import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
// import Button from "./Button"
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"



const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={250} height={29} />
      </Link>
    

   <div className="  "></div>

      <div className="lg:flexCenter hidden gap-4">
        <ul className="hidden h-full gap-12 lg:flex mr-10">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className=" text-blue-90 text-xl  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <Button asChild variant="outline" className="border-2 border-blue-90 text-blue-90 text-lg">
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild  className="border-2 border-[#FFC224] bg-[#FFC224] text-blue-90 text-lg">
          <Link href="/login">Register</Link>
        </Button>

        {/* <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        /> */}
        {/* <Button
          type="button"
          title="Register"
          icon="/user.svg"
          variant="btn_dark_green"
        /> */}
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar