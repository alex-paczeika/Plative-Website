import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiMessageDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
      <div className={css.name}>
  <img src="logowithnamewhite.png" alt="Binjan Logo" />
</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          {/* <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li> */}
          {/* <li className={`flexCenter ${css.phone}`}>
            <p>hello@plative.ro</p>
            <BiMessageDetail size={"40px"} />
          </li> */}
        </ul>

        {/* for medium and small screens */}

      </div>
    </motion.div>
  );
};

export default Header;
