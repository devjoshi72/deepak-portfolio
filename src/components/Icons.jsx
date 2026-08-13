import React from "react";

export const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const GmailIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    {/* Blue left bar */}
    <path d="M5 8.5V39.5C5 41.43 6.57 43 8.5 43H11V23.35L24 33L37 23.35V43H39.5C41.43 43 43 41.43 43 39.5V8.5C43 4.63 38.44 2.36 35.36 4.7L33 6.5L24 13.5L15 6.5L12.64 4.7C9.56 2.36 5 4.63 5 8.5Z" fill="#4285F4"/>
    {/* Green right bar */}
    <path d="M37 23.35V43H39.5C41.43 43 43 41.43 43 39.5V8.5C43 4.63 38.44 2.36 35.36 4.7L33 6.5L37 9.5V23.35Z" fill="#34A853"/>
    {/* Red M center */}
    <path d="M5 8.5V39.5C5 41.43 6.57 43 8.5 43H11V23.35L24 33L37 23.35V9.5L24 19.15L11 9.5V8.5C11 6.63 8.44 5.36 5.36 4.7L5 8.5Z" fill="#EA4335"/>
    {/* Blue left column */}
    <path d="M5 8.5V39.5C5 41.43 6.57 43 8.5 43H11V23.35L5 18.5V8.5Z" fill="#4285F4"/>
    {/* Dark red top-left */}
    <path d="M5 8.5C5 4.63 9.56 2.36 12.64 4.7L15 6.5L24 13.5L11 9.5V8.5L5 8.5Z" fill="#C5221F"/>
    {/* Yellow top-right */}
    <path d="M43 8.5C43 4.63 38.44 2.36 35.36 4.7L33 6.5L24 13.5L37 9.5V8.5L43 8.5Z" fill="#FBBC04"/>
  </svg>
);

export const GoogleLocationIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#EA4335"/>
    <path d="M12 2C10.2 2 8.5 2.7 7.3 3.9L12 12V2Z" fill="#4285F4"/>
    <path d="M12 2C13.8 2 15.5 2.7 16.7 3.9L12 12V2Z" fill="#FBBC04"/>
    <path d="M12 12L7.3 3.9C5.8 5.3 5 7.1 5 9C5 12.3 8.7 17.1 12 20.8V12Z" fill="#C5221F"/>
    <path d="M12 12L16.7 3.9C18.2 5.3 19 7.1 19 9C19 12.3 15.3 17.1 12 20.8V12Z" fill="#34A853"/>
    <circle cx="12" cy="9" r="3" fill="white"/>
  </svg>
);

export const OracleLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#C74634"/>
    <path d="M16 8H8C6.34 8 5 9.34 5 11V13C5 14.66 6.34 16 8 16H16C17.66 16 19 14.66 19 13V11C19 9.34 17.66 8 16 8ZM16 14H8C7.45 14 7 13.55 7 13V11C7 10.45 7.45 10 8 10H16C16.55 10 17 10.45 17 11V13C17 13.55 16.55 14 16 14Z" fill="white"/>
  </svg>
);

export const EbizonLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#0284C7"/>
    <path d="M7 7H17V9.5H10V11H16V13.5H10V15H17V17.5H7V7Z" fill="white"/>
  </svg>
);

export const KubernetesLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#326CE5"/>
    <path d="M12 4L4.5 8.33V16.67L12 21L19.5 16.67V8.33L12 4Z" stroke="white" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12.5" r="3" fill="white"/>
  </svg>
);

export const GitLabLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FC6D26"/>
    <path d="M12 18L15.5 7H18L12 18Z" fill="#E24329"/>
    <path d="M12 18L8.5 7H6L12 18Z" fill="#E24329"/>
    <path d="M6 7L3.5 12.5L12 18L6 7Z" fill="#FCA326"/>
    <path d="M18 7L20.5 12.5L12 18L18 7Z" fill="#FCA326"/>
  </svg>
);

export const JenkinsLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#D24939"/>
    <circle cx="12" cy="9" r="3" fill="white"/>
    <path d="M6 18C6 14.7 8.7 12 12 12C15.3 12 18 14.7 18 18H6Z" fill="white"/>
  </svg>
);

export const VaultLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#000000"/>
    <path d="M12 5L6 8.5V15.5L12 19L18 15.5V8.5L12 5Z" stroke="#00C4B6" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2.5" fill="#00C4B6"/>
  </svg>
);

export const TerraformLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#844FBA"/>
    <path d="M7 6V11L11.5 13.5V8.5L7 6Z" fill="white"/>
    <path d="M12.5 8.5V13.5L17 11V6L12.5 8.5Z" fill="white" opacity="0.8"/>
    <path d="M12.5 14.5V19.5L17 17V12L12.5 14.5Z" fill="white"/>
  </svg>
);

export const AnsibleLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#EE0000"/>
    <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M12 6L7 18H9.5L10.8 14.5H13.2L14.5 18H17L12 6ZM12 8.5L12.8 11.5H11.2L12 8.5Z" fill="white"/>
  </svg>
);

export const ArgoCDLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#EF7B4D"/>
    <circle cx="12" cy="12" r="5" fill="white"/>
    <circle cx="12" cy="12" r="2.5" fill="#EF7B4D"/>
  </svg>
);

export const NginxLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#009639"/>
    <path d="M7 6V18H9.5L14.5 10V18H17V6H14.5L9.5 14V6H7Z" fill="white"/>
  </svg>
);

export const CloudflareLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#F38020"/>
    <path d="M18 15C19.1 15 20 14.1 20 13C20 12.1 19.3 11.3 18.4 11.1C18.2 8.8 16.3 7 14 7C12.3 7 10.8 7.9 10 9.3C9.7 9.1 9.4 9 9 9C7.9 9 7 9.9 7 11C7 11.2 7 11.3 7.1 11.5C5.8 11.7 5 12.7 5 14C5 15.1 6.1 16 7.5 16H18V15Z" fill="white"/>
  </svg>
);

export const PrometheusLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#E6522C"/>
    <path d="M12 4C12 4 8 9 8 13C8 15.2 9.8 17 12 17C14.2 17 16 15.2 16 13C16 9 12 4 12 4Z" fill="white"/>
    <circle cx="12" cy="14" r="1.5" fill="#E6522C"/>
  </svg>
);

export const GrafanaLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#F47B20"/>
    <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M12 6V12L16 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
