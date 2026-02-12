import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        titel="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemoURL=""
        learnmoreURL=""
        playstoreURL="media/images/googlePlayBadge.svg"
        appstoreURL="media/images/appStoreBadge.svg"
        m1="Try Demo"
        m2="Learn More"
      />
      <RightSection
        imageURL="media/images/console.png"
        titel="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        trydemoURL=""
        learnmoreURL=""
        playstoreURL="media/images/googlePlayBadge.svg"
        appstoreURL="media/images/appStoreBadge.svg"
        m1="Learn more "
      />
      <LeftSection
        imageURL="media/images/coin.png"
        titel="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemoURL=""
        learnmoreURL=""
        playstoreURL="media/images/googlePlayBadge.svg"
        appstoreURL="media/images/appStoreBadge.svg"
        m1="coin"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        titel="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        trydemoURL=""
        learnmoreURL=""
        playstoreURL="media/images/googlePlayBadge.svg"
        appstoreURL="media/images/appStoreBadge.svg"
        m1="Kite Connect "
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        titel="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemoURL=""
        learnmoreURL=""
        playstoreURL="media/images/googlePlayBadge.svg"
        appstoreURL="media/images/appStoreBadge.svg"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
