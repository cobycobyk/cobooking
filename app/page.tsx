import { trending_data } from "@/data/trending";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import SearchForm from "@/components/SearchForm";


export default function Home() {
  return (
    <main className="bg-[#013B94]">
      <section className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl text-white">Find Your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Search low prices on hotels, homes and much more...</h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">Most popular choices for travellers from around the world</p>
        </div>
        <div className="mx-auto max-w-7xl mt-10 p-6">
        <Carousel
          className="w-full max-w-7xl">
          <CarouselContent>
            {trending_data.map((item) => (
              <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none">
                  <CardContent>
                    <div className="space-y-1 shrink-0 cursor-pointer">
                      <img
                        key={item.id}
                        className="w-80 h-72 object-cover rounded-lg pb-2"
                        src={item.src}
                        alt=""
                      />

                      <p className="font-bold">{item.title}</p>
                      <p className="">{item.location}</p>
                      <p className="font-light text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
          </div>
      </section>
    </main>
  );
}
