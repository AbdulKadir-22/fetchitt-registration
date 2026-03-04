import React, { useState, useEffect } from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const scrollToSignup = () => {
        setMobileMenuOpen(false);
        document.getElementById("get-early-access")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header style={{
                position: "sticky", top: 0, zIndex: 100,
                background: scrolled || mobileMenuOpen ? "rgba(253, 252, 251, 0.95)" : "rgba(253, 252, 251, 0.8)",
                backdropFilter: "blur(12px)",
                borderBottom: scrolled || mobileMenuOpen ? "1px solid var(--border)" : "1px solid transparent",
                padding: scrolled ? "12px 0" : "20px 0",
                transition: "var(--transition)",
            }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <img
                            src="/fetchtitt.svg"
                            alt="Fetchitt Logo"
                            style={{
                                width: 44,
                                height: 44,
                                objectFit: "contain",
                                borderRadius: 12,
                                boxShadow: scrolled ? "0 8px 20px var(--primary-glow)" : "none",
                                transition: "var(--transition)"
                            }}
                        />
                        <span className="display" style={{ fontSize: "1.6rem", fontWeight: 800, color: NAVY }}>Fetchitt</span>
                    </div>

                    <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
                        {["How It Works", "Senders", "Fetchers"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link">{item}</a>
                        ))}
                    </nav>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <button className="btn-primary hide-mobile" style={{ padding: "12px 30px", borderRadius: 16, fontSize: "1rem" }} onClick={scrollToSignup}>
                            Get Early Access
                        </button>
                        <div
                            className="show-mobile"
                            style={{ display: "none", width: 44, height: 44, borderRadius: 12, background: "white", border: "1px solid var(--border)", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Icon name={mobileMenuOpen ? "close" : "menu"} size={24} style={{ color: NAVY }} />
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="show-mobile-flex" style={{
                        display: "none",
                        flexDirection: "column",
                        background: "white",
                        position: "absolute",
                        top: "100%", left: 0, right: 0,
                        borderBottom: "1px solid var(--border)",
                        padding: "20px 24px 32px",
                        gap: "24px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                        animation: "slide-up 0.3s ease-out"
                    }}>
                        {["How It Works", "Senders", "Fetchers"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                                className="display"
                                style={{
                                    textDecoration: "none",
                                    color: NAVY,
                                    fontSize: "1.2rem",
                                    fontWeight: 700
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            className="btn-primary"
                            style={{ padding: "16px", borderRadius: 18, fontSize: "1.1rem", width: "100%" }}
                            onClick={scrollToSignup}
                        >
                            Get Early Access
                        </button>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
