import ArticleCard from "./ArticleCard"


const articles = [
    {
    title: "Building Fungible Tokens with the Near JS SDK",
    description: "A step-by-step tutorial for building fungible tokens on Near using the JS SDK",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/jsVkNHGVkUY/upload/92ef1178a12c6530ed1f8168739cf74f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    href: "https://onihani.hashnode.dev/building-fungible-tokens-with-the-near-js-sdk",
  },
]

const Article = () => {
  return (
    <section id="blog" className="w-full">
  <div>
    <h1 className="mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-bricolageGrotesque text-center lg:text-left">
  <span className="text-white">TECHNICAL</span> <br />
  <span className="text-zinic">WRITING</span>
</h1>



    <div className="">
          {articles.map(({ title, description, image, href }, key) => (
            <ArticleCard
              key={key}
              title={title}
              description={description}
              image={image}
              href={href}
            />
          ))}
        </div>
    </div>
    </section>
  )
}

export default Article