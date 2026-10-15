import coloracao from "@/assets/eo-coloracao.jpg";
import totalBlonde from "@/assets/eo-total-blonde.jpg";
import manicure from "@/assets/eo-manicure.jpg";
import loiros from "@/assets/eo-loiros.jpg";
import ombre from "@/assets/eo-ombre.jpg";
import liso from "@/assets/eo-liso.jpg";
import morena from "@/assets/eo-morena.jpg";
import megaHair from "@/assets/eo-mega-hair-new.jpg";

// Single source of truth for business details (verified on the official Instagram bio).
export const SALON = {
  name: "Eduarda Oliveira Hair",
  shortName: "Eduarda Oliveira",
  city: "Botucatu · SP",
  hours: "Atendimento com horário marcado",
  whatsapp: "5514999223476",
  whatsappLabel: "(14) 99922-3476",
  instagram: "https://www.instagram.com/eduardaoliveiirahair/",
  instagramHandle: "@eduardaoliveiirahair",
  heroImg: loiros,
};

export type Category = "Loiros" | "Coloração" | "Morenas" | "Liso & mega" | "Unhas";

export type Service = {
  id: string;
  title: string;
  category: Category;
  copy: string;
  cta: string;
  img: string;
  pros: string[];
  source: string;
  alt?: string;
  photoLabel?: string;
};

const IG = "https://www.instagram.com/eduardaoliveiirahair/";
export const SERVICES: Service[] = [
  { id: "total-blonde", title: "Total blonde", category: "Loiros", copy: "Loiro intenso e iluminado do comprimento às pontas, com acabamento frio e sofisticado.", cta: "Quero total blonde", img: totalBlonde, alt: "Cabelo loiro platinado feito por Eduarda Oliveira", pros: [], source: `${IG}reel/DbuAubft_J3/` },
  { id: "unhas", title: "Manicure & pedicure", category: "Unhas", copy: "Unhas bem cuidadas, cutilagem delicada e esmaltação com acabamento impecável para mãos e pés.", cta: "Quero manicure & pedicure", img: manicure, alt: "Unhas feitas com esmaltação clara e acabamento delicado", pros: [], source: IG },
  { id: "loiros", title: "Loiros", category: "Loiros", copy: "Mechas e clareamentos planejados para o seu tom de pele e o loiro que você sonha.", cta: "Quero meu loiro", img: loiros, alt: "Eduarda Oliveira ao lado de cliente com cabelo loiro", pros: [], source: `${IG}reel/Dbo0tWrtRzY/` },
  { id: "ombre", title: "Ombré hair", category: "Loiros", copy: "Transição degradê da raiz às pontas, com ondas que valorizam cada nuance.", cta: "Quero ombré hair", img: ombre, alt: "Ombré hair com pontas loiras onduladas", pros: [], source: `${IG}reel/Dbl1N_oyuC2/` },
  { id: "coloracao", title: "Coloração", category: "Coloração", copy: "Mudança de cor com diagnóstico do fio — do castanho ao platinado, com cuidado em cada etapa.", cta: "Quero coloração", img: coloracao, alt: "Antes e depois de coloração para loiro platinado por Eduarda Oliveira", pros: [], source: `${IG}p/DbdQAyek-_o/` },
  { id: "morena", title: "Morena iluminada", category: "Morenas", copy: "Castanhos com brilho e profundidade, finalizados com movimento e pontas modeladas.", cta: "Quero morena", img: morena, alt: "Cabelo castanho com pontas modeladas e brilho", pros: [], source: `${IG}reel/Dbl1TOrSnpE/` },
  { id: "liso", title: "Liso hair", category: "Liso & mega", copy: "Fios alinhados, macios e com brilho espelhado, sem perder o caimento natural.", cta: "Quero liso hair", img: liso, alt: "Cabelo escuro liso e brilhante", pros: [], source: `${IG}reel/Dbl1ZFMyM-f/` },
  { id: "mega-hair", title: "Mega hair", category: "Liso & mega", copy: "Mais comprimento e volume com aplicação cuidadosa e resultado natural.", cta: "Quero mega hair", img: megaHair, alt: "Mechas de cabelo para aplicação de mega hair", pros: [], source: `${IG}reel/DbuAMZdBBGI/` },
];

export const CATEGORIES: ("Todos" | Category)[] = ["Todos", "Loiros", "Coloração", "Morenas", "Liso & mega", "Unhas"];
export const MARQUEE_ITEMS = ["LOIROS", "COLORAÇÃO", "OMBRÉ HAIR", "TOTAL BLONDE", "MANICURE & PEDICURE", "MORENAS", "LISO HAIR", "MEGA HAIR"];
export const PERIODS = ["Manhã", "Tarde", "Fim da tarde"];
export const NO_PREF = "Sem preferência";

export function fmtDate(d: string) {
  if (!d) return "A combinar";
  const [y, m, dd] = d.split("-");
  return `${dd}/${m}/${y}`;
}

export function todayLocal(now = new Date()) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

export function buildWhatsAppUrl(o: { service: string; pro: string; date: string; period: string; notes: string }) {
  const lines = [
    `Olá, Eduarda! Gostaria de solicitar um horário:`,
    ``,
    `• Serviço: ${o.service}`,
    `• Profissional: ${o.pro || NO_PREF}`,
    `• Data preferida: ${fmtDate(o.date)}`,
    `• Período preferido: ${o.period || "A combinar"}`,
    ...(o.notes.trim() ? [`• Observação: ${o.notes.trim()}`] : []),
    ``,
    `Aguardo a confirmação da disponibilidade.`,
  ];
  return `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
