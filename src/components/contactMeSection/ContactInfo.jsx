import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="dilnoza.turkmenbayeva@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+998 99 624 19 44" Image={FiPhone} />
      <SingleInfo text="Uzbekistan, Tashkent" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
