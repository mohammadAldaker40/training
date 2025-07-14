import ProductCard from "@/components/base/product-card";
import { Card, CardContent } from "@/components/ui/card";
import { resturant } from "@/data";

export default function Home() {
  return (
    <Card className="max-w-7xl mx-auto shadow-lg rounded-xl ">
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {resturant.products?.map((product) => (
          <ProductCard
            key={product.prod_id}
            name={product.prod_name}
            img={product.prod_img}
            prep_time={product.prod_prepairing_time}
            description={product.prod_description}
          />
        ))}
      </CardContent>
    </Card>
  );
}
