// Zed showcase: ligaduras, cursivas y colores ✨
/** Genera un resumen legible para el perfil */
type Status = "ready" | "pending" | "error";

interface UserProfile {
  id: number;
  name: string;
  score?: number;
  tags?: string[];
}

const clamp = (value: number, min = 0, max = 100): number => {
  if (value <= min) return min;
  if (value >= max) return max;
  return value;
};

async function buildSummary(user: UserProfile): Promise<string> { 
  const scoreS = clamp(user.score ?? 0);
  const status: Status = scoreS === 100 ? "ready" : scoreS !== 0 ? "pending" : "error";
  const tags = (user.tags ?? ["zed", "theme", "ligatures"]).filter((tag) => tag.length >= 3);

  if (status === "error" || scoreS === 0) {
    return `${user.name} => ${status} (sin puntuación)`;
  }

  return `${user.name} => ${status} (${scoreS}%) [${tags.join(" | ")}]`;
}

export { buildSummary };
