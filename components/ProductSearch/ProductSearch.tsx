"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Input } from "../ui/Input";
import styles from "./ProductSearch.module.scss";

export default function ProductSearch() {
	const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [mounted, setMounted] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search)
      if (debouncedValue.length > 0) {
        params.set("searchTerm", debouncedValue)
      } else {
        params.delete("searchTerm")
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString().replace('+', '%')}`);
      })
    },
    [pathname, router]
  )

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const searchQuery = params.get("searchTerm") ?? ""
    setInputValue(searchQuery)
  }, [])

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true)
    }
  }, [debouncedValue, mounted])

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue)
  }, [debouncedValue, handleSearchParams, mounted])

	return (
		<>
			<div className={styles.wrapper}>
        <h1 className={styles["wrapper-title"]}>Поиск продуктов</h1>
				<Input
          className={styles["wrapper-search"]}
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value)
					}}
					placeholder="Search products"
				/>
			</div>
		</>
	)
}