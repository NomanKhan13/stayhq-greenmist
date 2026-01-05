const reservations = [
  {
    id: 1,
    property: "GreenMist Hill View Retreat",
    checkIn: "March 15, 2025",
    checkOut: "March 18, 2025",
    roomType: "Deluxe Mountain View",
    status: "Confirmed",
  },
  {
    id: 2,
    property: "GreenMist Tea Garden Estate",
    checkIn: "May 22, 2025",
    checkOut: "May 25, 2025",
    roomType: "Garden Suite",
    status: "Confirmed",
  },
  {
    id: 3,
    property: "GreenMist Valley Retreat",
    checkIn: "October 10, 2024",
    checkOut: "October 13, 2024",
    roomType: "Valley View Room",
    status: "Completed",
  },
  {
    id: 4,
    property: "GreenMist Hill View Retreat",
    checkIn: "July 5, 2024",
    checkOut: "July 8, 2024",
    roomType: "Standard Room",
    status: "Completed",
  },
];

const page = () => {
  return (
    <section id="upcoming" className="space-y-8">
      <h2 className="font-serif text-2xl font-light tracking-tight">
        Upcoming Stays
      </h2>
      <div className="space-y-6">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="p-6 bg-card/40 hover:bg-card/60 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-2">
                  Property
                </p>
                <h3 className="font-serif text-lg font-light text-foreground">
                  {reservation.property}
                </h3>
              </div>
              <span className="text-xs px-2 py-1 bg-accent text-accent-foreground">
                {reservation.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-1">
                  Check-in
                </p>
                <p className="text-foreground">{reservation.checkIn}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-1">
                  Check-out
                </p>
                <p className="text-foreground">{reservation.checkOut}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-secondary">
              <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-1">
                Room Type
              </p>
              <p className="text-foreground">{reservation.roomType}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
