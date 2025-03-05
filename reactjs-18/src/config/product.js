export const sortOptions = [
  { label: "Price: Low to high", value: "price.asc" },
  { label: "Price: High to low", value: "price.desc" },
]

export const productCategories = [
  {
    title: "skateboards",
    image: "/images/skateboard-one.webp",
    subcategories: [
      {
        title: "Tools",
        description: "The tools that go with the board.",
        image: "/images/tool-one.webp",
        slug: "tools",
      },
    ],
  },
  {
    title: "clothing",
    image: "/images/clothing-one.webp",
    subcategories: [
      {
        title: "T-shirts",
        description: "Cool and comfy tees for effortless style.",
        slug: "t-shirts",
      },
    ],
  },
]

export const productTags = [
  "new",
  "sale",
  "bestseller",
  "featured",
  "popular",
  "trending",
  "limited",
  "exclusive",
]

export function getSubcategories() {
  if (!category) return []

  const subcategories =
    productCategories
      .find((c) => c.title === category)
      ?.subcategories.map((s) => ({
        label: s.title,
        value: s.slug,
      })) ?? []

  return subcategories
}
