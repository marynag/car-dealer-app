"use server";

import { API_URL } from "../constants/constants";

export interface VehicleMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export async function getVehicleMakes() {
  try {
    const response = await fetch(
      `${API_URL}/GetMakesForVehicleType/car?format=json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch vehicle makes");
    }
    const data = await response.json();

    return {
      data: data.Results ?? [],
      success: true,
    };
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.error("Error fetching vehicle makes:", errorMessage);

    return {
      data: [],
      success: false,
      error: errorMessage,
    };
  }
}
