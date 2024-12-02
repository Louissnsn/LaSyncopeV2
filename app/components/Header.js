"use client";
import Link from "next/link";
import Image from "next/image";
import logoSyncope from "../../public/logo/LOGO-10x10cm.png";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "@/styles/Header.module.css";

const links = [
  {
    name: "ACCUEIL",
    href: "/",
    submenu: [
      {
        name: "DIRECTION ARTISTIQUE",
        href: "/direction-artistique",
      },
    ],
  },
  {
    name: "PROJETS",
    href: "/projets",
    submenu: [
      { name: "ÉCOLE D'ÉTÉ", href: "/projets/ecoledete" },
      { name: "LE VENTRE DES POISSONS", href: "/projets/leventredespoissons" },
      { name: "PRIX NOBEL DE L'AMOUR", href: "/projets/prixnobeldelamour" },
      { name: "QUAND LE LOUP N'Y EST PLUS", href: "/projets/quandleloup" },
    ],
  },
  { name: "AGENDA", href: "/agenda" },
  { name: "CONTACTS", href: "/contacts" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutIdRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (name) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setActiveSubMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      setActiveSubMenu(null);
      timeoutIdRef.current = null;
    }, 200);
  };

  const handleMouseClick = (linkName) => {
    if (linkName === "PROJETS") {
      router.push("/projets");
    } else if (linkName === "DIRECTION ARTISTIQUE") {
      router.push("/direction-artistique");
    } else if (linkName === "ACCUEIL") {
      router.push("/");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.header}>
      {/* <div className={styles.logoAndMobilemenucontainer}> */}
      {/* <div className={styles.menuButton} onClick={toggleMenu}>
          <MenuIcon className={styles.menuIcon} />
        </div> */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logoSyncope}
            alt="logo de la syncope collectif"
            style={{ objectFit: "contain" }}
            width={200 / (16 / 9)}
            height={140 / (16 / 9)}
          />
        </Link>
        {/* </div> */}
      </div>

      <div className={styles.menu}>
        <nav
          className={`${styles.navBase} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navList}>
            {links.map((link) => {
              const isSubMenuActive = activeSubMenu === link.name;
              const isActiveLink = pathname === link.href;

              const linkClasses = `${styles.navLink} ${
                isActiveLink || isSubMenuActive ? styles.activeLink : ""
              }`;

              return (
                <li
                  key={link.name}
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.submenu ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMouseClick(link.name)}
                        className={linkClasses}
                      >
                        {link.name}
                      </button>
                      {isSubMenuActive && (
                        <ul className={styles.submenu}>
                          {link.submenu.map((subLink) => (
                            <li
                              key={subLink.name}
                              onClick={() => setActiveSubMenu(null)}
                            >
                              <Link
                                href={subLink.href}
                                className={`${styles.submenuLink} ${
                                  pathname === subLink.href
                                    ? styles.activeSubmenuLink
                                    : ""
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href} className={linkClasses}>
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
