import { writable } from "svelte/store";

let request_array: string[] = []

export const request_store  = writable(request_array)
