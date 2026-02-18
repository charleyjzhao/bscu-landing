"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import AnimateOnScroll from "./AnimateOnScroll";

const affiliations = [
  "Current Undergraduate Student",
  "Current Graduate / MBA Student",
  "Alumni",
  "Credit Union / Banking Professional",
  "Other",
];

const howHeardOptions = [
  "LinkedIn",
  "Haas Fintech Club",
  "WhatsApp / Group Chat",
  "Word of Mouth / Friend",
  "Haas Community Board or Email",
  "Other",
];

const interestOptions = [
  "Personal Checking Account",
  "Personal Savings Account",
  "Student Loans",
  "Startup / Business Banking",
  "Fintech Sponsor Bank Services",
  "Becoming a Charter Subscriber",
  "Serving as an Alumni Advisor",
  "Joining the Board of Directors",
];

const studentAffiliations = [
  "Current Undergraduate Student",
  "Current Graduate / MBA Student",
];

interface FormState {
  full_name: string;
  email: string;
  affiliation: string;
  graduation_year: string;
  how_heard: string;
  interests: string[];
  additional_notes: string;
}

const initialState: FormState = {
  full_name: "",
  email: "",
  affiliation: "",
  graduation_year: "",
  how_heard: "",
  interests: [],
  additional_notes: "",
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const showGradYear = studentAffiliations.includes(form.affiliation);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      // Clear graduation year if affiliation changes away from student
      if (name === "affiliation" && !studentAffiliations.includes(value)) {
        updated.graduation_year = "";
      }
      return updated;
    });
  };

  const handleInterestToggle = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (form.interests.length === 0) {
      setError("Please select at least one area of interest.");
      return;
    }

    setSubmitting(true);

    const payload = {
      full_name: form.full_name.trim(),
      email: form.email.trim().toLowerCase(),
      affiliation: form.affiliation,
      graduation_year: showGradYear ? form.graduation_year.trim() || null : null,
      how_heard: form.how_heard,
      interests: form.interests,
      additional_notes: form.additional_notes.trim() || null,
    };

    const { error: supabaseError } = await supabase
      .from("waitlist_submissions")
      .insert([payload]);

    if (process.env.NODE_ENV === "development") {
      console.log("[BSCU Waitlist] Supabase response:", { error: supabaseError });
    }

    setSubmitting(false);

    if (supabaseError) {
      setError(
        supabaseError.message ||
          "Something went wrong. Please try again or refresh the page."
      );
      return;
    }

    setSuccess(true);
    setForm(initialState);
  };

  return (
    <section
      id="waitlist"
      className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#1E2D45]"
    >
      <div className="max-w-2xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
              Join the Waitlist
            </p>
            <h2
              className="text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F1F5F9] mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Join the Waitlist
            </h2>
            <p className="text-[16px] text-[#94A3B8]">
              Whether you&apos;re a student, alumni, advisor, or industry executive
              — tell us who you are and how you&apos;d like to be involved.
            </p>
          </div>
        </AnimateOnScroll>

        {success ? (
          <AnimateOnScroll>
            <div className="bg-[#111827] border border-[#1E2D45] rounded-xl p-10 text-center">
              {/* Check icon */}
              <div className="w-14 h-14 rounded-full bg-[#C9A84C1A] border border-[#C9A84C33] flex items-center justify-center mx-auto mb-5">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="text-[22px] font-semibold text-[#F1F5F9] mb-3"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                You&apos;re on the list.
              </h3>
              <p className="text-[16px] text-[#94A3B8] leading-relaxed">
                Thank you — you&apos;re on the list. We&apos;ll be in touch as BSCU
                moves toward launch.
              </p>
            </div>
          </AnimateOnScroll>
        ) : (
          <AnimateOnScroll>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#111827] border border-[#1E2D45] rounded-xl p-7 sm:p-9 flex flex-col gap-6"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="full_name"
                  className="text-[13px] font-medium text-[#94A3B8]"
                >
                  Full Name <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={form.full_name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[13px] font-medium text-[#94A3B8]"
                >
                  Email Address <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@berkeley.edu"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Affiliation */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="affiliation"
                  className="text-[13px] font-medium text-[#94A3B8]"
                >
                  Affiliation <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                </label>
                <select
                  id="affiliation"
                  name="affiliation"
                  required
                  value={form.affiliation}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="" disabled>
                    Select your affiliation
                  </option>
                  {affiliations.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* Graduation Year (conditional) */}
              {showGradYear && (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="graduation_year"
                    className="text-[13px] font-medium text-[#94A3B8]"
                  >
                    Expected Graduation Year (e.g., 2026){" "}
                    <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="graduation_year"
                    name="graduation_year"
                    type="text"
                    required={showGradYear}
                    placeholder="2026"
                    value={form.graduation_year}
                    onChange={handleChange}
                    className="form-input"
                    maxLength={4}
                    pattern="\d{4}"
                  />
                </div>
              )}

              {/* How did you hear */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="how_heard"
                  className="text-[13px] font-medium text-[#94A3B8]"
                >
                  How did you hear about BSCU?{" "}
                  <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                </label>
                <select
                  id="how_heard"
                  name="how_heard"
                  required
                  value={form.how_heard}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {howHeardOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interests (checkboxes) */}
              <fieldset>
                <legend className="text-[13px] font-medium text-[#94A3B8] mb-3">
                  I&apos;m interested in:{" "}
                  <span className="text-[#C9A84C]" aria-hidden="true">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {interestOptions.map((interest) => {
                    const checked = form.interests.includes(interest);
                    return (
                      <label
                        key={interest}
                        className={`checkbox-item px-4 py-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          checked
                            ? "border-[#C9A84C66] bg-[#C9A84C0D]"
                            : "border-[#1E2D45] bg-[#0A0F1E] hover:border-[#C9A84C44]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={checked}
                          onChange={() => handleInterestToggle(interest)}
                          className="shrink-0 mt-0.5"
                        />
                        <span
                          className={`text-[13px] leading-snug ${
                            checked ? "text-[#F1F5F9]" : "text-[#94A3B8]"
                          }`}
                        >
                          {interest}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Additional notes (optional) */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="additional_notes"
                  className="text-[13px] font-medium text-[#94A3B8]"
                >
                  Anything else you&apos;d like to share?{" "}
                  <span className="text-[#475569] font-normal">(optional)</span>
                </label>
                <textarea
                  id="additional_notes"
                  name="additional_notes"
                  rows={4}
                  placeholder="Tell us about your background, interest, or how you'd like to get involved."
                  value={form.additional_notes}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {/* Error message */}
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 px-4 py-3 rounded-lg bg-[#FF444411] border border-[#FF444433] text-[14px] text-[#FF8888]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#C9A84C] text-[#0A0F1E] font-semibold py-3.5 rounded-md text-[15px] hover:bg-[#E2B96F] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(201,168,76,0.2)] hover:shadow-[0_0_32px_rgba(201,168,76,0.3)] flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Express Interest →"
                )}
              </button>

              <p className="text-center text-[12px] text-[#475569]">
                Your information is used solely for BSCU waitlist purposes and
                will not be shared with third parties.
              </p>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
