import { ProductType } from "@/types/types";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage<ProductType[]>("cart", []);
