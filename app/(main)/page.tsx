import Image from "next/image";
import dayjs from "dayjs";
import Counter from "../components/Counter";

export default function MainPage() {
  const b = dayjs().format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"); // display

  return (
    <div className="grid p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Counter />
    </div>
  );
}
