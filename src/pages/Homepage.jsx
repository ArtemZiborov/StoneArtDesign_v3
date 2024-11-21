import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <PageNav />
      <div className="container mx-auto py-8">
        <div className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Stone Art Design
          </h2>
          <p className="text-gray-600">
            Stone Art Design is a premier provider of custom stone artwork and
            design services. We specialize in creating unique and beautiful
            stone pieces that enhance the aesthetic appeal of any space. Our
            team of skilled artisans and designers work closely with clients to
            bring their vision to life, using only the highest quality materials
            and craftsmanship.
          </p>
          <p className="text-gray-600 mt-4">
            Whether you are looking for a stunning stone sculpture, a custom
            countertop, or intricate stone inlays, Stone Art Design has the
            expertise and experience to deliver exceptional results. Our
            commitment to excellence and customer satisfaction is unmatched,
            making us the go-to choice for all your stone design needs.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="col-span-2">
            <img
              src="src/assets/images/IMG-20240916-WA0083.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img
              src="src/assets/images/IMG-20240916-WA0090.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <img
              src="src/assets/images/IMG-20240916-WA0085.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3">
            <img
              src="src/assets/images/IMG-20240916-WA0160.jpg"
              alt="Image 4"
              className="w-full h-full object-cover transform scale-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
