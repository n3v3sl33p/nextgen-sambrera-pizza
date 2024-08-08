import {
  Categories,
  Container,
  Filters,
  Header,
  ProductsGroupList,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductCart } from "@/components/shared/product-cart";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        {/* <Categories />
        <SortPopup /> */}
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[120px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* список товаров */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={0}
                products={[
                  {
                    id: 1,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 9,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 9,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Закуски"
                categoryId={2}
                products={[
                  {
                    id: 1,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 9,
                    name: "peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 999,
                    items: [{ price: 500 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
