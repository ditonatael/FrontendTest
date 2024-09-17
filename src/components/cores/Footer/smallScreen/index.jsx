import { CiMenuBurger } from "react-icons/ci";

export default function MobileFooter() {
  return (
    <div className="flex justify-between items-center md:hidden container px-4 h-[89px] border-t">
      <div className="flex flex-col gap-1 items-center justi">
        <div className="size-[39px] flex items-center justify-center">
          <CiMenuBurger className="size-full" />
        </div>
        <div className="font-rubik text-sm leading-6 text-linear">Home</div>
      </div>
      <div className="flex flex-col gap-1 items-center justi">
        <div className="size-[39px] flex items-center justify-center">
          <CiMenuBurger className="size-full" />
        </div>
        <div className="font-rubik text-sm leading-6 text-linear">
          Promotions
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justi">
        <div className="size-[39px] flex items-center justify-center">
          <CiMenuBurger className="size-full" />
        </div>
        <div className="font-rubik text-sm leading-6 text-linear">Others</div>
      </div>
    </div>
  );
}
