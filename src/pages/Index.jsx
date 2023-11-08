import Hero from "../components/Hero";
import Default from "../layouts/Default";
import Logo from "../components/Logo";
import Proker from "../components/Proker";
import Documentation from "../components/Documentation";
import Team from "../components/Team";

export default function Index(){
  return (
    <Default>
      <Hero/>
      <Logo/>
      <Proker/>
      <Documentation/>
      <Team/>
    </Default>
  )
}