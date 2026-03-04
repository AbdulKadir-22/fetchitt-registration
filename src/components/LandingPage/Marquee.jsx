import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const Marquee = () => {
    const items = ["Chargers", "Keys", "Medicines", "Documents", "Gym Bags", "Groceries", "Gifts", "Parcels", "Books", "Lunches"];
    const doubled = [...items, ...items];
    return (
        <div style={{ overflow: "hidden", padding: "20px 0", borderTop: "1px solid rgba(39,47,81,0.06)", borderBottom: "1px solid rgba(39,47,81,0.06)", background: "rgba(254,113,62,0.03)" }}>
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 28px", whiteSpace: "nowrap" }}>
                        <Icon name="chevron_right" size={16} style={{ color: PRIMARY, opacity: 0.5 }} />
                        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.875rem", color: NAVY, opacity: 0.6 }}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
