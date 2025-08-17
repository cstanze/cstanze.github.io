import { atom, type MapStore } from 'nanostores';

export interface StatusItem {
  message: string;
  ongoing: boolean;
}

export const statusItems: MapStore<Record<string, StatusItem>> = atom([]);
