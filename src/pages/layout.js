import Header from "@/components/Header";
import Head from "next/head"

export default function Layout({ children }){
  //     useEffect(() => {
  //   dispatch(
  //     showModal({
  //       modalVariant: "SUSPENDED"
  //     })
  //   );
  // }, [])  
  return (
        <>
        <Head>
        <title>
           My Portfolio
        </title>
        <meta
          property="og:title"
          content="Fractional NFT Marketplace: Buy, Sell Digital Art On Ommniverse"
        />
        <meta
          property="og:description"
          content="Ommniverse Fractional NFT Marketplace - buy, sell & create digital NFT artwork on our ERC1155 technology-based platform. Experience true ownership & crypto art!"
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.ommniverse.ai/" />
        <meta
          name="keywords"
          content="ommniverse, ommniverse NFT, fractional NFTs. nft marketplace, nft art marketplace, buy NFTs, digital art nft, nft art, nft crypto art, create nft, nft platform, fractional art ownership, fractional nft marketplace, fractional crypto, buy and sell nfts."
        />

        <meta name="next-head-count" content="5" />
        <meta
          data-n-head="ssr"
          data-hid="twitter:site"
          name="twitter:site"
          content="@ommniverse_news"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Ommniverse",
              operatingSystem: "MACOS, WINDOWS, LINUX, ANDROID, iOS",
              applicationCategory: "https://schema.org/Web3Application",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "8864",
              },
              screenshot: ["https://www.ommniverse.ai/logo.png"],
              thumbnailUrl: "https://www.ommniverse.ai/logo.png",
              description:
                "Ommniverse Fractional NFT Marketplace - buy, sell & create digital NFT artwork on our ERC1155 technology-based platform. Experience true ownership & crypto art!",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        ></script>
         </Head>
         {/* <MaintenancePage /> */}
         <Header/>
      
            <div className="mt-0 h-full">
                {children}
            </div>
        </>
    )
}