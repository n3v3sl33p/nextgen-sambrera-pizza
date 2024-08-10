import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <div className={""}>
        <Container className="flex items-center justify-between py-8">
          {/* левая часть */}
          <Link href={"/"}>
            <div className="flex gap-4  items-center">
              <Image src={"/logo.png"} alt="logo" width={35} height={35} />
              <div>
                <h1 className={"text-2xl uppercase font-black"}>
                  Sambrera Pizza
                </h1>
                <p className={"text-sm text-gray-400 leading-3"}>
                  вкусней уже некуда
                </p>
              </div>
            </div>
          </Link>

          <div className="mx-10 flex-1">
            <SearchInput />
          </div>

          {/* правая часть */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <User size={16} />
              Войти
            </Button>
            <div>
              <Button className="group relative">
                <b>520 р</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                  <ShoppingCart size={16} className={"relative"} />
                  <b>3</b>
                </div>
                <ArrowRight
                  size={20}
                  className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
