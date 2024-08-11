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
import { Api } from "@/services/api-clients";
export default async function Home() {
  const categories = await Api.categories.getAllCategories();
  console.log(categories[0].products);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        {/* <Categories />
        <SortPopup /> */}
      </Container>
      <TopBar categories={categories} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[120px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* список товаров */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      products={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
