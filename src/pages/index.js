import Head from "next/head";
import { Raleway } from "next/font/google";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/instagram";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next-project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        heading='Capture Photography'
        message='I capture in nature and keep them alive'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
