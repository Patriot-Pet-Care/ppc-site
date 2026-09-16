import Link from "next/link";
import Icon from "@/components/Icon";
import AcademyLinkButton from "@/components/AcademyLinkButton";

export const metadata = { title: "PPC Global Academy" };

const OFFERINGS = [
  { icon: "cap-grad" as const, title: "Structured courses", body: "Sequenced professional training built on working facility practice rather than general theory." },
  { icon: "shield" as const, title: "Certification", body: "Recognised completion credentials for practitioners and for teams inside an organisation." },
  { icon: "book" as const, title: "Continuing development", body: "Ongoing material for professionals who have already completed foundational training." },
];

const STEPS = [
  { title: "Start in the Marketplace", body: "Read the overview, choose supporting resource bundles and understand what certification involves." },
  { title: "Move to the Academy", body: "Enrolment, coursework, assessment and certificates all take place on the Academy platform." },
  { title: "Come back for resources", body: "Professional documents, forms and licensed material that support the coursework remain here in the Marketplace." },
];

export default function GlobalAcademyPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Global Academy
          </p>
          <h1>PPC Global Academy</h1>
          <p className="lede">
            Professional education for the pet-care industry. Courses,
            certification and continuing development, delivered on the
            Academy&rsquo;s own learning platform.
          </p>
          <p style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <AcademyLinkButton className="btn btn-primary">
              Visit PPC Global Academy
            </AcademyLinkButton>
            <a className="btn btn-ghost-navy" href="#academy-what">
              See what is offered
            </a>
          </p>
        </div>
      </div>

      <div className="band band-cream tight">
        <div className="wrap">
          <div className="note hold">
            <strong>The Academy link has no approved destination yet</strong>
            <p>
              Phase&nbsp;12 requires every Academy call to action to point
              at the approved LearnWorlds destination. That URL has not
              been supplied, so every Academy button on this page is
              deliberately inert and announces itself as pending rather
              than guessing an address. <em>Recommendation:</em>{" "}
              Dr.&nbsp;Hart confirms the exact public Academy URL in
              writing before this page is built in Wix, because a wrong
              link here sends paying customers to a dead end and is the
              kind of error that is very visible at launch.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-white" id="academy-what">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">What the Academy is</p>
              <h2>A separate learning platform, not a section of this shop</h2>
              <p>
                PPC Global Academy runs on its own dedicated learning
                system. Courses, lessons, assessments, progress tracking
                and certificates all live there, which is why they are not
                duplicated inside the Marketplace.
              </p>
              <p>
                The Marketplace introduces the Academy, promotes individual
                courses, explains certification and sells the resource
                bundles that support the coursework. When you are ready to
                enrol, you move across to the Academy itself.
              </p>
              <div className="note spec">
                <strong>Phase 12 compliance</strong>
                <p>
                  Course content must not be recreated inside Wix. This
                  page carries overview material, course promotion,
                  certification information and calls to action only.
                </p>
              </div>
            </div>
            <div className="artframe">
              <Icon name="cap-grad" />
              <span>Approved PPCGA branding placeholder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-cream">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Offerings</p>
            <h2>What the Academy delivers</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g3">
            {OFFERINGS.map((o) => (
              <div className="panel" key={o.title}>
                <Icon name={o.icon} width={42} height={42} style={{ color: "var(--red)" }} />
                <h3>{o.title}</h3>
                <p className="muted">{o.body}</p>
              </div>
            ))}
          </div>
          <p className="pending" style={{ marginTop: 24 }}>
            Specific course titles, curriculum descriptions and pricing are
            pending approved Academy copy. Nothing on this page should name
            a course until that copy is supplied.
          </p>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead">
            <p className="eyebrow">How it fits together</p>
            <h2>Where the Academy sits</h2>
            <hr className="rule" />
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-navy">
        <div className="wrap center">
          <p className="eyebrow on-navy">You are about to leave the Marketplace</p>
          <h2>Continue to PPC Global Academy</h2>
          <p style={{ maxWidth: "62ch", margin: "0 auto 26px" }}>
            The Academy is a separate platform with its own account, its
            own enrolment process and its own payment pathway. Your
            Marketplace cart does not travel with you.
          </p>
          <AcademyLinkButton className="btn btn-onnavy">
            Go to PPC Global Academy
          </AcademyLinkButton>
          <div
            className="legalbox"
            style={{ maxWidth: "70ch", margin: "32px auto 0", textAlign: "left" }}
          >
            PPC Marketplace&trade; is operated by PPC Consulting, LLC, an
            affiliated company of Patriot&rsquo;s Pet Care, LLC. Academy
            transactions follow PPC Consulting&rsquo;s approved Academy
            payment pathway and are handled on the Academy platform, not in
            this store.
          </div>
        </div>
      </div>
    </>
  );
}
