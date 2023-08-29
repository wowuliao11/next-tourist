import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  Accordion,
  AccordionItem,
  User,
  Divider,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
interface Props {
  children: React.ReactNode;
}
export default function Layout({
  children, // will be a page or nested layout
}: Props) {
  const [show, setShow] = useState(false);
  const widthStr = Number((1 / 6) * 100).toString() + "%";

  const style = {
    width: !show ? widthStr : "0%",
  };
  const defaultContent = "somethings";

  return (
    <div className="h-screen purple-dark text-foreground bg-background flex overflow-auto">
      <div
        className="fixed top-0 left-0 grid grid-flow-row grid-rows-6 grid-cols-5 md:w-1/6 purple-dark text-foreground bg-background ease-in-out duration-500"
        style={style}
      >
        <div className="col-span-5 row-span-1 grid grid-rows-3 grid-cols-5 flex-none">
          <User
            className="col-start-2 col-span-3 row-span-full"
            name="Junior Garcia"
            description={
              <Link href="#" size="sm" isExternal>
                @jrgarciadev
              </Link>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
          <div className="col-start-5 col-span-1 row-start-2 row-span-1 flex justify-end">
            <FontAwesomeIcon
              icon={findIconDefinition(faBars)}
              className="hover:-rotate-90 cursor-pointer duration-500"
            />
          </div>

          <Divider />
        </div>
        <div className="col-span-5">
          <Accordion className="">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Accordion 1"
              className=" transition-width duration-500"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="fixed w-full h-10">
        <Navbar className="">
          <NavbarBrand>
            <FontAwesomeIcon
              size="lg"
              icon={findIconDefinition(faBars)}
              className="hover:-rotate-90 cursor-pointer duration-500"
              onClick={() => setShow(!show)}
            />
            <Divider orientation="vertical" />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="primary" isBlock href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="p-">{children}</div>
    </div>
  );
}
