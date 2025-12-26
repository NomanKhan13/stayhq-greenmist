"use client";
import { PROPERTY_OPTIONS } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const RoomFilter = () => {
  const searchParams = useSearchParams();
  const currentProperty =
    PROPERTY_OPTIONS.find((option) => option.id == searchParams.get("property"))
      ?.id || "all";
  console.log(currentProperty);
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  return (
    <div className="p-6 bg-card mb-8 mx-6">
      <h3 className="text-xl sm:text-2xl tracking-tight mb-4">Filter & Sort</h3>

      <div className="w-full md:max-w-sm mb-4">
        <label className="block text-xs uppercase tracking-widest mb-4 text-foreground">
          Stay Type
        </label>
        <select
          value={selectedPropertyId}
          onChange={(e) => setSelectedPropertyId(e.target.value)}
          className="w-full px-4 py-3 bg-foreground-muted/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-all hover:bg-card/30"
        >
          {PROPERTY_OPTIONS.map((property, idx) => (
            <option
              key={property.id}
              value={property.id}
              className="bg-foreground-muted/20"
            >
              {property.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:max-w-sm mb-4">
        <label className="block text-xs uppercase tracking-widest mb-4 text-foreground">
          Select Property
        </label>
        <select
          value={selectedPropertyId}
          onChange={(e) => setSelectedPropertyId(e.target.value)}
          className="w-full px-4 py-3 bg-foreground-muted/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-all hover:bg-card/30"
        >
          {PROPERTY_OPTIONS.map((property, idx) => (
            <option
              key={property.id}
              value={property.id}
              className="bg-foreground-muted/20"
            >
              {property.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:max-w-sm mb-4">
        <label className="block text-xs uppercase tracking-widest mb-4 text-foreground">
          Select Property
        </label>
        <select
          value={selectedPropertyId}
          onChange={(e) => setSelectedPropertyId(e.target.value)}
          className="w-full px-4 py-3 bg-foreground-muted/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-all hover:bg-card/30"
        >
          {PROPERTY_OPTIONS.map((property, idx) => (
            <option
              key={property.id}
              value={property.id}
              className="bg-foreground-muted/20"
            >
              {property.name}
            </option>
          ))}
        </select>
      </div>

      {/* {selectedProperty && (
              <section className="px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <p className="text-sm text-foreground-secondary mb-3 uppercase tracking-widest">
                      {selectedProperty.location}
                    </p>
                    <h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-balance">
                      {selectedProperty.name}
                    </h2>
                  </div>
                  <p className="text-sm text-foreground-secondary">
                    {rooms.length} room type{rooms.length !== 1 ? "s" : ""}{" "}
                    available
                  </p>
                </div>
              </section>
            )} */}
    </div>
  );
};

export default RoomFilter;
