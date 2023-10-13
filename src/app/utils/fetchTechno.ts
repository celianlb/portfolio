'use client';

import { Techno } from '../../../typing';

export const fetchAllTechno = async (): Promise<Techno[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllTechno`
    );
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const { techno } = await res.json();
    if (!techno) {
      console.log('pas de techno');
      return []; // Return an empty array or handle the situation appropriately
    }
    return techno;
  } catch (error) {
    console.error('Error fetching techno:', error);
    return []; // Return an empty array or handle the error situation appropriately
  }
};
