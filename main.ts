import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — the label beside a pizza-box table.
// Candidate objects weighed: Allen key (ritual wand for flat-pack
// furniture), "Do Not Disturb" sign (amulet against cleaning spirits),
// clothes peg (wooden jaw that bit the washing). The pizza-box table
// won: a fresh, ordinary object, and the year-3000 misreading is
// true and absurd — it really is a tiny table, shipped with every
// pizza, for a diner who never shows up.
// Revision: "shipped inside every pizza" was slightly off — the
// table sits in the box, not in the pizza. "Found in every pizza
// box" is truer, shorter, and keeps the deadpan curator voice.
const LABEL =
  "Pizza-box table, c. 2025. A tiny plastic table found in every pizza box, presumably for a very small diner who never arrived.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
