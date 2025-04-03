import SingleContactSocial from "./SingleContactSocial";
import {  FaTelegram, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.t.me/dilnozaolimzhonovna" Icon={FaTelegram} />
      <SingleContactSocial link="https://www.tiktok.com/dilnoza_olimzhonovna1/" Icon={FaTiktok} />
      <SingleContactSocial link="https://www.instagram.com/dilnoza_olimzhonovna1/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
