import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const Footer = () => {
    return (
        <footer style={{ borderTop: "1px solid rgba(39,47,81,0.08)", padding: "48px 40px", background: "var(--bg)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <img
                            src="/fetchtitt.svg"
                            alt="Fetchitt Logo"
                            style={{ width: 32, height: 32, objectFit: "contain", borderRadius: 8 }}
                        />
                        <span className="display" style={{ fontWeight: 800, fontSize: "1.25rem", color: NAVY }}>Fetchitt</span>
                    </div>
                    <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
                        {["Privacy Policy", "Terms of Service", "Safety Guidelines", "Contact Us"].map(l => (
                            <a
                                key={l}
                                href={l === "Contact Us" ? "mailto:akadir22086@gmail.com" : `#${l.toLowerCase().replace(/ /g, "-")}`}
                                style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                                onMouseEnter={e => e.target.style.color = PRIMARY}
                                onMouseLeave={e => e.target.style.color = "#9ca3af"}
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                        {["share", "language"].map(ic => (
                            <div key={ic} style={{
                                width: 38, height: 38, borderRadius: "50%",
                                background: "rgba(39,47,81,0.06)", display: "flex", alignItems: "center", justifyContent: "center",
                                cursor: "pointer", transition: "all 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.firstChild.style.color = "white"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "rgba(39,47,81,0.06)"; e.currentTarget.firstChild.style.color = NAVY; }}
                            >
                                <Icon name={ic} size={17} style={{ color: NAVY, transition: "color 0.2s" }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ textAlign: "center", color: "#d1d5db", fontSize: "0.8rem" }}>
                    © 2026 Fetchitt Inc. All rights reserved. Built for people on the move.
                </div>
            </div>
        </footer>
    );
};

export default Footer;