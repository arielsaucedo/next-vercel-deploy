import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1>
        {/* Ir a <a href='/about'>About</a> */}
        Ir a <Link href='/about'>About</Link>
      </h1>
      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
