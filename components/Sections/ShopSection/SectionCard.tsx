import CustomButton from "@/components/common/CustomButton";
import Link from "next/link";

type SectionCardProps = {
  title: string;
  buttonTitle: string;
  image: string;
};

export default function SectionCard(props: SectionCardProps) {
  return (
    <Link
      href=""
      className="w-full min-h-[400px] bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="w-full text-right h-[80%] p-5 lg:py-5 lg:px-10 flex items-start justify-end">
        <h1 className="text-4xl lg:text-6xl font-bricolage text-white lg:-rotate-90 lg:origin-bottom-right whitespace-nowrap">
          {props.title}
        </h1>
      </div>
      <div className="relative w-full p-5 lg:p-10 flex flex-col items-start z-10">
        <CustomButton buttonText={props.buttonTitle} href="" variant="outline" size="sm" />
      </div>
    </Link>
  );
}
