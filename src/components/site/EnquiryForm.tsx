import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { submitEnquiry } from "@/lib/enquiry";

const schema = z.object({
  studentName: z.string().min(2, "Please enter the student's name"),
  parentName: z.string().min(2, "Please enter the parent/guardian's name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  studentClass: z.string().min(1, "Please select the student's class"),
  board: z.string().min(1, "Please select the board"),
  course: z.string().min(1, "Please select a course / batch"),
  mode: z.string().min(1, "Please select study mode"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#050e1d] px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all focus:border-[#f3ba2f] focus:ring-2 focus:ring-[#f3ba2f]/20";
const labelClass = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300";
const errorClass = "mt-1 text-xs font-semibold text-rose-600 dark:text-amber-400";

export function EnquiryForm() {
  const [isSibling, setIsSibling] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      studentClass: "",
      board: "CBSE",
      course: "Board Exam Preparation (9th–12th)",
      mode: "Offline (Dubagga Center)",
      message: "",
    },
  });

  const selectedBoard = watch("board");
  const selectedMode = watch("mode");

  // Course cards pre-fill the course and message field
  useEffect(() => {
    const handler = (e: Event) => {
      const courseName = (e as CustomEvent<string>).detail;
      setValue("course", courseName, { shouldValidate: true });
      setValue("message", `Enquiry for: ${courseName}`);
    };
    window.addEventListener("premier:prefill-course", handler);
    return () => window.removeEventListener("premier:prefill-course", handler);
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    let finalMessage = values.message?.trim() ?? "";
    if (isSibling) {
      finalMessage = finalMessage
        ? `${finalMessage} [Claiming 50% Sibling Discount]`
        : "[Claiming 50% Sibling Discount]";
    }

    await submitEnquiry({
      studentName: values.studentName,
      parentName: values.parentName,
      phone: values.phone,
      studentClass: values.studentClass,
      board: values.board,
      subjects: [values.course],
      mode: values.mode,
      message: finalMessage,
    });
    toast.success("Enquiry formatted for WhatsApp!", {
      description:
        "WhatsApp has opened with your admission details ready to send to our admissions counselor.",
    });
    reset();
  };

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1a33]/90 p-6 sm:p-8 shadow-md dark:shadow-2xl text-slate-800 dark:text-white backdrop-blur-xl"
      noValidate
    >
      {/* Form Header */}
      <div className="border-b border-slate-100 dark:border-white/10 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Admission Enquiry Form
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
            Fill out your child's academic details. Our counselors will reach out promptly with
            batch schedules.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-800 dark:text-[#f3ba2f] border border-amber-500/25 dark:border-amber-400/30 shrink-0 w-fit">
          <Sparkles className="size-3 text-[#d97706] dark:text-[#f3ba2f]" /> Fast Response
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Student Name */}
        <div>
          <label className={labelClass} htmlFor="studentName">
            Student Full Name *
          </label>
          <input
            id="studentName"
            className={inputClass}
            placeholder="e.g. Aryan Kumar"
            {...register("studentName")}
          />
          {errors.studentName && <p className={errorClass}>{errors.studentName.message}</p>}
        </div>

        {/* Parent Name */}
        <div>
          <label className={labelClass} htmlFor="parentName">
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            className={inputClass}
            placeholder="e.g. Ramesh Kumar"
            {...register("parentName")}
          />
          {errors.parentName && <p className={errorClass}>{errors.parentName.message}</p>}
        </div>

        {/* Indian Phone Number */}
        <div>
          <label className={labelClass} htmlFor="phone">
            WhatsApp Contact Number *
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
              +91
            </span>
            <input
              id="phone"
              type="tel"
              className={`${inputClass} pl-12`}
              placeholder="9876543210"
              maxLength={10}
              {...register("phone")}
            />
          </div>
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Student Class */}
        <div>
          <label className={labelClass} htmlFor="studentClass">
            Class / Grade *
          </label>
          <select id="studentClass" className={inputClass} {...register("studentClass")}>
            <option value="" className="bg-white dark:bg-[#0c1a33] text-slate-800 dark:text-white">
              Select Student Class
            </option>
            {siteContent.form.classes.map((cls) => (
              <option
                key={cls}
                value={`Class ${cls}`}
                className="bg-white dark:bg-[#0c1a33] text-slate-800 dark:text-white"
              >
                Class {cls}
              </option>
            ))}
          </select>
          {errors.studentClass && <p className={errorClass}>{errors.studentClass.message}</p>}
        </div>

        {/* Board Selection */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Curriculum Board *</label>
          <div className="grid grid-cols-3 gap-2.5">
            {siteContent.form.boards.map((b) => {
              const isSelected = selectedBoard === b;
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => setValue("board", b, { shouldValidate: true })}
                  className={`rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                    isSelected
                      ? "bg-[#f3ba2f] text-[#071328] shadow-sm"
                      : "bg-slate-50 dark:bg-[#050e1d] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:text-white border border-slate-200 dark:border-white/10"
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
          <input type="hidden" {...register("board")} />
          {errors.board && <p className={errorClass}>{errors.board.message}</p>}
        </div>

        {/* Course / Program */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="course">
            Desired Course / Program *
          </label>
          <select id="course" className={inputClass} {...register("course")}>
            <option value="" className="bg-white dark:bg-[#0c1a33] text-slate-800 dark:text-white">
              Select a Course or Batch
            </option>
            {siteContent.form.courses.map((crs) => (
              <option
                key={crs}
                value={crs}
                className="bg-white dark:bg-[#0c1a33] text-slate-800 dark:text-white"
              >
                {crs}
              </option>
            ))}
          </select>
          {errors.course && <p className={errorClass}>{errors.course.message}</p>}
        </div>

        {/* Study Mode: Offline vs Online */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Preferred Learning Mode *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteContent.form.modes.map((m) => {
              const isSelected = selectedMode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setValue("mode", m, { shouldValidate: true })}
                  className={`flex items-center justify-between rounded-xl p-3.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#f3ba2f] text-[#071328] shadow-sm"
                      : "bg-slate-50 dark:bg-[#050e1d] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:text-white border border-slate-200 dark:border-white/10"
                  }`}
                >
                  <span>{m}</span>
                  {isSelected && <CheckCircle2 className="size-4 text-[#071328]" />}
                </button>
              );
            })}
          </div>
          <input type="hidden" {...register("mode")} />
          {errors.mode && <p className={errorClass}>{errors.mode.message}</p>}
        </div>

        {/* Sibling Scholarship Interactive Claim Box */}
        <div className="sm:col-span-2">
          <label
            onClick={() => setIsSibling(!isSibling)}
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer select-none ${
              isSibling
                ? "bg-amber-500/10 dark:bg-amber-400/15 border-amber-400 shadow-sm ring-1 ring-amber-400/30"
                : "bg-slate-50 dark:bg-[#050e1d] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`grid size-10 place-items-center rounded-xl text-xs font-bold transition-colors ${
                  isSibling
                    ? "bg-[#f3ba2f] text-[#071328] shadow-xs"
                    : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                }`}
              >
                %
              </span>
              <div>
                <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Enrolling with a Sibling? (Claim 50% Special Concession)
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400 font-normal">
                  {isSibling
                    ? "✓ 50% sibling discount attached to your admission enquiry!"
                    : "Tap to claim 50% off tuition fees for the second enrolled child"}
                </span>
              </div>
            </div>

            <input
              type="checkbox"
              checked={isSibling}
              onChange={(e) => setIsSibling(e.target.checked)}
              className="size-5 rounded-md accent-[#f3ba2f] cursor-pointer"
            />
          </label>
        </div>

        {/* Optional Query / Message */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Special Notes / Specific Subjects (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            className={inputClass}
            placeholder="e.g. Interested in Physics & Mathematics coaching, requesting morning batch timing..."
            {...register("message")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#f3ba2f] hover:bg-[#e0ab24] px-8 py-4 text-sm sm:text-base font-bold text-[#071328] shadow-md shadow-amber-500/20 transition-all hover:scale-102 active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <MessageCircle className="size-5 fill-[#071328] text-[#f3ba2f]" />
          <span>{isSubmitting ? "Submitting..." : "Submit Enquiry via WhatsApp →"}</span>
        </button>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-normal text-center sm:text-right">
          🔒 Your contact information is kept strictly confidential.
        </span>
      </div>
    </form>
  );
}
