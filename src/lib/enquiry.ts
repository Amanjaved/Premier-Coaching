import { siteContent } from "@/data/siteContent";

export type EnquiryData = {
  studentName: string;
  parentName: string;
  phone: string;
  studentClass: string;
  board: string;
  subjects: string[];
  mode: string;
  message?: string;
};

/**
 * Single submission entry point. Today it opens WhatsApp with a pre-filled
 * summary; swap the body of this function for an API call later.
 */
export async function submitEnquiry(data: EnquiryData): Promise<{ ok: boolean }> {
  const lines = [
    "*New Admission Enquiry — Premier Coaching*",
    `Student: ${data.studentName}`,
    `Parent: ${data.parentName}`,
    `Phone: ${data.phone}`,
    `Class: ${data.studentClass}`,
    `Board: ${data.board}`,
    `Subjects: ${data.subjects.length ? data.subjects.join(", ") : "—"}`,
    `Mode: ${data.mode}`,
  ];
  if (data.message?.trim()) lines.push(`Message: ${data.message.trim()}`);

  const url = `https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
  return { ok: true };
}

export const whatsappLink = (text = siteContent.contact.whatsappGreeting) =>
  `https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(text)}`;

/** Pre-select a course in the enquiry form and scroll to it. */
export function enquireAboutCourse(course: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("premier:prefill-course", { detail: course }));
  document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" });
}
