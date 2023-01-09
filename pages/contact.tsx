import Link from "next/link";

import { MainLayout } from "../components/layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1>
        {/* Ir a <a href='/'>Home</a> */}
        Ir a <Link href='/'>Home</Link>
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/contact.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
};

export default Contact;
