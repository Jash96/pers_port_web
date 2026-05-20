import type { CSSProperties, ReactNode } from "react";

type SocialIconProps = {
  className?: string;
};

type SocialLink = {
  key: string;
  label: string;
  href?: string;
  tone: string;
  Icon: (props: SocialIconProps) => ReactNode;
};

export const CONTACT_EMAIL = "jashanthadani0696@gmail.com";

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 9.4h3.1v9.7H6.6zM8.1 5.1a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm4 4.3h3v1.3a3.3 3.3 0 0 1 2.9-1.6c2.1 0 3.5 1.4 3.5 4.2v5.8h-3.1v-5.3c0-1.4-.5-2.1-1.6-2.1-1.1 0-1.7.8-1.7 2.1v5.3h-3z" />
    </svg>
  );
}

function GithubIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.3a8.9 8.9 0 0 0-2.8 17.3c.4.1.6-.2.6-.4v-1.6c-2.4.5-2.9-1-2.9-1-.4-.9-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.3 0-1 .3-1.7.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.4.9.7-.2 1.5-.3 2.2-.3.8 0 1.5.1 2.2.3 1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.7.9 1.4.9 2.4 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.2c0 .2.2.5.6.4A8.9 8.9 0 0 0 12 3.3Z"
      />
    </svg>
  );
}

function DuneIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.4 16.8c2.1-4.7 5-7.1 8.6-7.1 3.5 0 6.4 2.4 8.6 7.1H3.4Z" />
      <path d="M5.4 13.1c1.5-3.9 3.7-5.9 6.6-5.9 2.8 0 5 2 6.6 5.9-1.9-1.6-4.1-2.5-6.6-2.5-2.6 0-4.8.9-6.6 2.5Z" opacity="0.62" />
      <path d="M7.8 9.5c1.1-2.4 2.5-3.7 4.2-3.7s3.1 1.3 4.2 3.7a9.1 9.1 0 0 0-8.4 0Z" opacity="0.34" />
    </svg>
  );
}

function XIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4.8 4.9 5.6 7.8-5.3 6.4h2.3l4.1-4.9 3.5 4.9h4.2l-5.9-8.3 5-5.9H16l-3.8 4.5-3.2-4.5H4.8Zm3.1 1.7h.8l7.4 10.7h-.8L7.9 6.6Z" />
    </svg>
  );
}

function SubstackIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.3 4.4h13.4v2.4H5.3zM5.3 8.6h13.4V11H5.3zM5.3 12.9h13.4v7.2L12 16.4l-6.7 3.7v-7.2Z" />
    </svg>
  );
}

function EmailIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.2 6.2h15.6c.7 0 1.2.5 1.2 1.2v9.2c0 .7-.5 1.2-1.2 1.2H4.2c-.7 0-1.2-.5-1.2-1.2V7.4c0-.7.5-1.2 1.2-1.2Zm.8 2.1v.2l7 4.6 7-4.6v-.2H5Zm14 2.5-6.5 4.1a1 1 0 0 1-1 0L5 10.8v4.9h14v-4.9Z" />
    </svg>
  );
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jashanthadani/",
    tone: "#4b8bd6",
    Icon: LinkedInIcon,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Jash96",
    tone: "#d7dce4",
    Icon: GithubIcon,
  },
  {
    key: "dune",
    label: "Dune",
    href: "https://dune.com/pepperones",
    tone: "#f06f3c",
    Icon: DuneIcon,
  },
  {
    key: "x-pepperones",
    label: "X / 0x_pepperones",
    href: "https://x.com/0x_pepperones",
    tone: "#e9edf3",
    Icon: XIcon,
  },
  {
    key: "x-aphelion",
    label: "X / AphelionWire",
    href: "https://x.com/AphelionWire",
    tone: "#9eb6ff",
    Icon: XIcon,
  },
  {
    key: "substack",
    label: "Substack",
    href: "https://pepperones.substack.com/",
    tone: "#ff8a3d",
    Icon: SubstackIcon,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    tone: "#a9c9ad",
    Icon: EmailIcon,
  },
];

type SocialSignalsProps = {
  className?: string;
  compact?: boolean;
};

export function SocialSignals({ className = "", compact = false }: SocialSignalsProps) {
  return (
    <div className={`social-signals ${compact ? "social-signals--compact" : ""} ${className}`}>
      <div className="social-signals__label meta">Reach</div>
      <div className="social-signals__rail" aria-label="Social links">
        {SOCIAL_LINKS.map(({ key, label, href, tone, Icon }) => {
          const style = { "--social-tone": tone } as CSSProperties;
          const content = (
            <>
              <Icon className="social-signals__icon" />
              <span className="social-signals__text">{label}</span>
            </>
          );

          if (!href) {
            return (
              <span
                key={key}
                className="social-signals__link social-signals__link--disabled"
                style={style}
                title="Dune link to be added"
                aria-label={`${label} link to be added`}
              >
                {content}
              </span>
            );
          }

          return (
            <a
              key={key}
              className="social-signals__link"
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              style={style}
              aria-label={label}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
