"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CLINICS, type Clinic, type ClinicId } from "@/content/site";

const STORAGE_KEY = "hsa-location";

interface LocationCtx {
  location: ClinicId;
  clinic: Clinic;
  setLocation: (id: ClinicId) => void;
}

const Ctx = createContext<LocationCtx>({
  location: "london",
  clinic: CLINICS.london,
  setLocation: () => {},
});

/**
 * Remembers the visitor's preferred clinic (London by default) so phone numbers,
 * CTAs and the form's clinic field follow it. A forced location (on /london/ or
 * /glasgow/) takes priority and is saved.
 */
export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLoc] = useState<ClinicId>("london");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount
      if (saved === "london" || saved === "glasgow") setLoc(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setLocation = useCallback((id: ClinicId) => {
    setLoc(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return <Ctx.Provider value={{ location, clinic: CLINICS[location], setLocation }}>{children}</Ctx.Provider>;
}

export const useLocation = () => useContext(Ctx);

/** Drop into a page to set the location for that page (e.g. the Glasgow landing page). */
export function ForceLocation({ id }: { id: ClinicId }) {
  const { location, setLocation } = useLocation();
  useEffect(() => {
    if (location !== id) setLocation(id);
  }, [id, location, setLocation]);
  return null;
}
