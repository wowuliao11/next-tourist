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
import { useEffect, useRef, useState } from "react";
interface Props {
  children: React.ReactNode;
}
export default function Layout({
  children, // will be a page or nested layout
}: Props) {
  const [show, setShow] = useState(true);
  const widthStr = Number((1 / 5) * 100).toString() + "%";

  const widthStyle = {
    width: show ? widthStr : "0%",
  };
  const displayStyle: any = {
    opacity: show ? 1 : 0,
    visibility: show ? "visible" : "hidden",
  };
  const blurClasses = show ? " brightness-50 " : "";
  const defaultContent = "somethings";

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    console.log("useEffect");
    function handleClickOutside(event) {
      console.log(
        svgRef.current?.contains(event.target),
        svgRef.current !== event.target
      );
      if (
        !svgRef.current?.contains(event.target) &&
        show &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="purple-dark text-foreground bg-background flex">
      <div
        className="fixed z-50 top-0 left-0 md:w-1/6 ease-in-out duration-500 flex flex-col h-screen text-foreground bg-cyan-950"
        style={widthStyle}
        ref={sidebarRef}
      >
        <div
          className="w-1/5 flex justify-between pb-2 pt-3 transition-visibility"
          style={displayStyle}
        >
          <User
            className="pl-3"
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
          <div className="">
            <FontAwesomeIcon
              icon={findIconDefinition(faBars)}
              className="hover:-rotate-90 cursor-pointer duration-500"
            />
          </div>
        </div>

        <Divider />

        <div
          className="whitespace-nowrap transition-visibility"
          style={displayStyle}
        >
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              <div className="overflow-hidden">{defaultContent}</div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              <div className="overflow-hidden">{defaultContent}</div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              <div className="overflow-hidden">{defaultContent}</div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className={"fixed z-30 w-full h-10 flex"}>
        <Navbar className="">
          <NavbarBrand className="pl-40">
            <FontAwesomeIcon
              ref={svgRef}
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
      <div className={"flex justify-center top-10 w-full" + blurClasses}>
        {children}
      </div>
    </div>
  );
}
