import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1>
        {/* Ir a <a href='/'>Home</a> */}
        Ir a <Link href='/'>Home</Link>
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/about.tsx</code>
        </p>
      </div>
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
