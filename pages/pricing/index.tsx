import Link from "next/link";

import { MainLayout } from "../../components/layouts/MainLayout";

const Pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
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

export default Pricing;
