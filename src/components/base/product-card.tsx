import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProductCard({
  name,
  prep_time,
  img,
  description,
}: {
  name: string;
  prep_time: string;
  img: string;
  description: string;
}) {
  return (
    <Card className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white">
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 text-xs text-gray-300">
          ⏱️ {prep_time}
        </CardFooter>
      </div>
    </Card>
  );
}
