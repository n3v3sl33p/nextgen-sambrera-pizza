"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/services/api-clients";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);
  useClickAway(ref, () => {
    setFocused(false);
  });
  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(search);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    500,
    [search]
  );
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />
      )}

      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute  top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Поиск..."
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11 "
          onFocus={() => setFocused(true)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "opacity-100 visible top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex gap-3 items-center px-3 py-2 hover:bg-primary/10 "
                onClick={() => {
                  setFocused(false);
                  setSearch("");
                  setProducts([]);
                }}
              >
                <Image
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  className="rounded-sm"
                  alt="pizza"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
