import { useState } from "react"; // Import useState from React
import PageNav from "../components/PageNav";
import Modal from "../components/Modal"; // Import the Modal component

function Materials() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PageNav />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 p-4 bg-white rounded shadow">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            We are using popular and very durable materials!
          </h1>
          <p className="text-gray-600 mb-4">
            Materials We Use at StoneArt Design, we craft unique surfaces and
            installations using some of the finest natural and engineered stones
            available. Our carefully selected materials combine durability,
            beauty, and timeless appeal, ensuring that each piece becomes a
            lasting statement in your home.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              <strong>Granite</strong>: Known for its exceptional hardness and
              resistance to wear, granite is one of the most durable materials
              we use. Formed deep within the Earth’s crust, it is rich in quartz
              and feldspar, lending it a natural elegance and resilience that’s
              perfect for high-use areas like kitchens and bathrooms.
            </li>
            <li>
              <strong>Quartzite</strong>: A stunning natural stone often
              mistaken for marble, quartzite offers the best of both worlds with
              its marble-like appearance and granite-like durability. Its subtle
              veining and neutral tones add sophistication and strength, making
              it an ideal choice for countertops and other surfaces that see
              heavy daily use.
            </li>
            <li>
              <strong>Marble</strong>: Prized for its timeless beauty, marble is
              a metamorphic rock that brings a classic luxury to any space. With
              rich colors and intricate veining, each marble slab is
              one-of-a-kind, perfect for those looking to add elegance to
              countertops, bathroom vanities, and accent walls.
            </li>
            <li>
              <strong>Quartz</strong>: Engineered to combine the look of natural
              stone with increased durability, quartz is non-porous and easy to
              maintain. Made from natural quartz crystals bonded with resin, it
              is available in a range of colors and finishes, providing a
              sophisticated, uniform look without the need for regular sealing.
            </li>
            <li>
              <strong>Porcelain</strong>: Porcelain countertops have become
              increasingly popular due to their outstanding durability,
              versatility, and aesthetic appeal. If you're considering porcelain
              countertop slabs for your kitchen or bathroom, this comprehensive
              guide will help you make an informed decision. We'll explore the
              advantages and disadvantages of porcelain countertops, their
              thickness options, installation considerations, cleaning tips, and
              pricing.
            </li>
            <li>
              <strong>Onyx</strong>: Onyx countertops offer a unique aesthetic
              with their colorful veining and intricate swirling patterns. While
              onyx is more delicate than other natural stones, its translucent
              quality allows it to be backlit, creating stunning visual
              highlights. Onyx is best suited for areas with less traffic, such
              as bathroom vanities, backsplashes, and accent areas.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            At StoneArt Design, we are passionate about bringing out the unique
            qualities of each material to create custom surfaces that transform
            and elevate your space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Granite",
                  "Granite, coarse- or medium-grained intrusive igneous rock that is rich in quartz and feldspar; it is the most common plutonic rock of the Earth's crust, forming by the cooling of magma (silicate melt) at depth. Granite is one of the hardest substances in the world. The only material that is harder than granite is a diamond. The hardness of granite makes it durable. Unlike other stone types, granite won't crumble or break over time."
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openModal(
                    "Granite",
                    "Granite, coarse- or medium-grained intrusive igneous rock that is rich in quartz and feldspar; it is the most common plutonic rock of the Earth's crust, forming by the cooling of magma (silicate melt) at depth. Granite is one of the hardest substances in the world. The only material that is harder than granite is a diamond. The hardness of granite makes it durable. Unlike other stone types, granite won't crumble or break over time."
                  );
                }
              }}
            >
              <img
                src="src/assets/images/Image_1.jpg"
                alt="Granite"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">Granite</h2>
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Quartzite",
                  "Quartzite is a highly-prized natural stone, not to be confused with engineered quartz surfacing. It resembles marble, with soft veining and cool colour tones which are on point with today’s white, grey, and smoky blue colour trends. It is also a strong performer in a kitchen environment. Granite and quartzite have very similar performance statistics; both are resistant to heat, chemicals, and scratches. Because quartzite is a fairly new stone on the market that often resembles marble, there have been some instances of mislabeling. This can create issues after installation due to different care and maintenance needs for the two materials. Be sure to talk to your stone provider to ensure that the stone you choose is truly quartzite."
                )
              }
            >
              <img
                src="src/assets/images/Image_2.jpg"
                alt="Quartzite"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">
                Quartzite
              </h2>
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Marble",
                  "Marble is a compact metamorphic rock, formed from limestone rocks that have been subjected to high temperature and pressure, causing a high degree of crystallisation and consequently giving rise to different types of marble. But what makes different types of marbles exist? The answer lies in their composition. Marble is mainly composed of calcium carbonate (CaCO3) plus a minimum part, around 10%, of elements that determine both its colour and its physical characteristics. If we stick to the colour of the marble, we can establish two classifications: Monocoloured marbles: Marble with a single colour (white, cream, red, pink, black, yellow, etc). Polychrome marbles: These are marbles made up of several colours. This diversity of colours is given by the veins or fragments that form part of the natural stone."
                )
              }
            >
              <img
                src="src/assets/images/Image_3.jpg"
                alt="Marble"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">Marble</h2>
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Quartz",
                  "Quartz work surfaces are made from 93% quartz and the remaining 7% polymer resin. Quartz has the look and feel of granite but provides a much more consistent and solid colour for your kitchen worktop, without the need for periodic sealing or polishing. Quartz worktops are an engineered stone that is both beautiful and elegant with attributes of natural stone with enhanced colours and impact including mirror flecks, natural stone appearances and modern concrete colour options."
                )
              }
            >
              <img
                src="src/assets/images/Image_4.jpg"
                alt="Quartz"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">Quartz</h2>
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Porcelain",
                  "Porcelain countertops have become increasingly popular due to their outstanding durability, versatility, and aesthetic appeal. If you're considering porcelain countertop slabs for your kitchen or bathroom, this comprehensive guide will help you make an informed decision. We'll explore the advantages and disadvantages of porcelain countertops, their thickness options, installation considerations, cleaning tips, and pricing.\n\nUV Light & Heat Resistance\nPorcelain is highly resistant to UV light and heat, unlike some natural stone materials such as granite. This makes it an excellent choice for both indoor and outdoor applications. Your porcelain countertop won't fade or discolor when exposed to sunlight, making it perfect for indoor or outdoor kitchens and entertainment areas.\n\nEnvironmentally Friendly\nIf you're environmentally conscious, you'll be pleased to know that porcelain countertops are an eco-friendly choice. They are made from natural raw materials and are recyclable, reducing their environmental impact. Additionally, their durability means they won't need frequent replacements, further reducing waste.\n\nPrevents Bacterial Growth\nPorcelain is naturally resistant to bacterial growth, making it a hygienic choice for kitchen countertops. Its non-porous surface prevents liquids and bacteria from seeping into the material, making cleanup and maintenance easy.\n\nHow to Clean Porcelain Countertops?\nCleaning porcelain countertops is straightforward. They do not require special care and are easy to clean with items you likely already have at home. However, it's important to know that porcelain countertops require more than weekly cleaning to preserve their appearance.\n\nTo maintain their beauty and durability, regularly clean your porcelain countertop using a mild liquid soap or detergent mixed with warm water. Avoid abrasive or acidic cleaners, as they can damage the surface. Regularly wipe the countertops with a soft cloth or sponge to remove any spills or residue. After cleaning, rinse the countertop with clean water to ensure all soap or detergent residue is removed. Finally, gently dry the surface with a clean, lint-free cloth to prevent water spots. Regular cleaning will keep your porcelain countertop looking pristine for years."
                )
              }
            >
              <img
                src="src/assets/images/Image_5.jpg"
                alt="Porcelain"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">
                Porcelain
              </h2>
            </button>
            <button
              className="cursor-pointer"
              onClick={() =>
                openModal(
                  "Onyx",
                  "Onyx countertops offer a unique aesthetic with their colorful veining and intricate swirling patterns. While onyx is more delicate than other natural stones, its translucent quality allows it to be backlit, creating stunning visual highlights. Onyx is best suited for areas with less traffic, such as bathroom vanities, backsplashes, and accent areas.\n\nPros of Onyx\n1. Unique Aesthetic: Onyx is relatively rare compared to popular natural stones like granite and marble. Its colorful veining and intricate swirling patterns can bring a truly distinctive look to areas like bathrooms, especially for vanity countertops or wall installations.\n2. Longevity: With proper care and maintenance, onyx can last over a century, making it a long-lasting investment for decorative surfaces.\n3. Translucency: One of the most unique features of onyx is its translucent quality, which allows it to be backlit. This effect can be used to create stunning visual highlights in settings like bathroom vanities, backsplashes, or even the base of a kitchen island. When lit from behind, the stone seems to glow, adding a dramatic effect that’s visually striking.\n\nCons of Onyx\n1. Fragility: Onyx is more delicate than many other natural stones, making it prone to damage in high-traffic areas like kitchen countertops. To reinforce its structure, onyx slabs are often backed with a fiberglass mesh.\n2. Susceptibility to Scratches: The softness of onyx makes it vulnerable to scratches and other damage, which can occur easily during everyday use.\n3. Reactivity to Acids: As a calcium-based stone, onyx reacts with acidic substances, making it prone to etching when exposed to spills like wine, vinegar, or lemon juice, or if cleaned with acidic products.\n\nCare and Maintenance\nTo preserve onyx surfaces, regular care and maintenance are crucial:\n- Avoid abrasive or acidic cleaners. Use warm water with mild soap (such as dish soap) or a cleaner specifically formulated for natural stone.\n- Seal regularly. Onyx requires sealing with an impregnating sealer to protect it from stains and other potential damage.\n- Avoid high-traffic areas. The stone’s delicate nature makes it best suited for areas where it won’t endure heavy wear and tear.\n\nBest Uses for Onyx\nWhile onyx may not be ideal for heavily used kitchen countertops, it can be an excellent choice in other areas, such as:\n- Backsplash\n- Bathroom Vanities\n- Wall Panels\n- Accent Areas\n- Base of Kitchen Islands\n\nOnyx is perfect for creating dramatic, eye-catching accents due to its stunning veining and the possibility of backlighting. This unique feature can add a luxurious and striking element to your home, making it truly stand out.\n\nAlthough onyx is not recommended for busy kitchen countertops, its versatility in other design applications makes it a valuable material to consider. If you need a natural stone that can withstand high traffic, you might explore more durable options like granite, marble, or quartzite."
                )
              }
            >
              <img
                src="src/assets/images/Image_7.jpg"
                alt="Onyx"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-2">Onyx</h2>
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title}>
        <div className="max-h-96 overflow-y-auto p-4">
          <p className="text-gray-600 whitespace-pre-line">
            {modalContent.content}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Materials;
