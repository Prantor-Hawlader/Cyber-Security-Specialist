export const checklistData = [
  {
    name: "Testing1",
    question: "INFORMATION GATHERING",
    subSections: [
      {
        name: "Identify Information Leakage with OSINT",
        subQuestions: [
          { keyword: "Search Engines" },
          { keyword: " Perform Internet Cache Search" },
        ],
      },
      {
        name: "Metafiles Information Disclosure",
        subQuestions: [
          { keyword: "View the Robots.txt" },
          { keyword: " View the Sitemap.xml" },
          { keyword: " View the Security.txt" },
        ],
      },
      {
        name: "Review The Client-Side Code",
        subQuestions: [
          {
            keyword:
              "Try to Find Sensitive Data in JavaScript Files and HTML pages",
          },
          {
            keyword:
              "Map Requests From the Source Code to Find Hidden/Administrative Functionality",
          },
          { keyword: "Try to Find Access/Secret keys" },
        ],
      },
      {
        name: "Map the Application's Directories, Parameters and Functionality",
        subQuestions: [
          { keyword: "Map routes and functionalities with normal use" },
          { keyword: "Directory and Parameter fuzzers" },
        ],
      },
      {
        name: "Fingerprint the Framework and Tech Stack",
        subQuestions: [
          { keyword: "Use Wappalyzer or Whatweb" },
          { keyword: "View File Extensions in the URL" },
          { keyword: "View the HTTP Headers" },
          { keyword: "Enumerate Cookie Names and Values" },
        ],
      },
    ],
  },
  {
    name: "Testing2",
    question: "CONFIGURATION AND DEPLOYMENT MANAGEMENT",
    subSections: [
      {
        name: "Test The Network Configuration",
        subQuestions: [
          { keyword: "Check The Application's Architecture" },
          { keyword: "Check for Default and Administrative Panels" },
          { keyword: "Check for Open Ports and Common Vulnerabilities" },
          { keyword: "Check for WebSockets Related Misconfigurations" },
        ],
      },
      {
        name: "Test CMS Configurations",
        subQuestions: [{ keyword: "CMS Vulnerability Identification" }],
      },
      {
        name: "Review Unreferenced Files or Interfaces",
        subQuestions: [
          { keyword: "Verify That The Server Does Not Reveal Sensitive Files" },
          { keyword: "Evaluate the Functionality of Unlinked Pages" },
        ],
      },
      {
        name: "Enumerate Infrastructure and Admin Interfaces",
        subQuestions: [
          { keyword: "Attempt to Access Administrative Interfaces" },
          { keyword: "Identify the Hidden Admin Functionalities" },
        ],
      },
      {
        name: "Testing HTTP Methods",
        subQuestions: [
          { keyword: "Check Method Conversion" },
          { keyword: "Test Access Control bypass" },
          { keyword: "Test for HTTP Method Override" },
        ],
      },
      {
        name: "Testing for Content Security Policy",
        subQuestions: [
          {
            keyword:
              "Examine the Content-Security-Policy Header or Meta Element for Misconfigurations",
          },
        ],
      },
      {
        name: "HSTS Header",
        subQuestions: [
          {
            keyword: "Ensure HSTS (HTTP Strict Transport Security) is enabled",
          },
        ],
      },
      {
        name: "Test File Permissions",
        subQuestions: [
          { keyword: "Test for Directory Listing" },
          { keyword: "Test for Directory Enumeration" },
        ],
      },
      {
        name: "Test For Subdomain Takeover",
        subQuestions: [
          { keyword: "Test 404 Responses for Subdomain Takeover" },
        ],
      },
      {
        name: "Test Cloud Storage",
        subQuestions: [
          {
            keyword:
              "Check the Sensitive Paths of AWS, Google Cloud, and Azure",
          },
        ],
      },
    ],
  },

  {
    name: "Testing3",
    question: "IDENTITY MANAGEMENT",
    subSections: [
      {
        name: "Test Role Definitions",
        subQuestions: [
          { keyword: "Role Definition Test" },
          { keyword: "Test for IDOR (Insecure Direct Object Reference)" },
          { keyword: "Test for Parameter Tampering" },
          {
            keyword:
              "Ensure Low Privilege Users can’t Access High Privilege Resources",
          },
        ],
      },
      {
        name: "Test User Registration Process",
        subQuestions: [
          {
            keyword:
              "Verify Users Cannot Register Multiple Times with Similar Email/Name",
          },
          { keyword: "Check for IDN homograph attack" },
          { keyword: "Ensure the Registrations are Verified" },
          { keyword: "Ensure Disposable Email Addresses are Rejected" },
        ],
      },
      {
        name: "Test Account Provisioning Process",
        subQuestions: [
          { keyword: "Review Verification Steps in the Provisioning Process" },
          { keyword: "Check the Verification for the De-Provisioning Process" },
          { keyword: "Assess Admin Users Rights to Provision Other Users" },
          { keyword: "Check Whether a User can De-Provision Themselves" },
          { keyword: "Examine Resources Allocated to a De-Provisioned Users" },
        ],
      },
      {
        name: "Testing For Account Enumeration",
        subQuestions: [
          {
            keyword:
              "Review Responses to Valid/Invalid Username and Password Entries",
          },
          { keyword: "Check for the Usage of Rate-Limiting" },
          { keyword: "Check for Username Enumeration" },
        ],
      },
    ],
  },

  {
    name: "Testing4",
    question: "AUTHENTICATION",
    subSections: [
      {
        name: "Test For Authentication Information Over Insecure Channel",
        subQuestions: [
          { keyword: "Check for HTTP Usage for Sensitive Interfaces" },
        ],
      },
      {
        name: "Test For Default Credentials and Response Manipulation",
        subQuestions: [
          { keyword: "Test usage of Default Credentials" },
          { keyword: "Test for Response Manipulation" },
        ],
      },
      {
        name: "Test For Weak Lockout Mechanism",
        subQuestions: [
          {
            keyword:
              "Test for Weak Lockout that May Result in Denial of Service",
          },
          { keyword: "Test the Anti Automation Mechanism" },
          { keyword: "Test The Account Unlocking Procedure" },
        ],
      },
      {
        name: "Test For No-Rate Limiting",
        subQuestions: [
          { keyword: "Check if Rate Limiting Exists" },
          { keyword: "Try to Bypass Rate Limiting" },
        ],
      },
      {
        name: "Test For Bypassing the Authentication Schema",
        subQuestions: [
          { keyword: "Test Forced Browsing" },
          { keyword: "Test for Session ID Prediction and Tampering" },
          { keyword: "Test for SQL Injection on the Login Page" },
          { keyword: "Test for Loose Comparison Bugs" },
        ],
      },
      {
        name: "Test For Remember Password",
        subQuestions: [
          {
            keyword:
              "Ensure That Stored Passwords are Encrypted and Stored in a Secure Manner",
          },
        ],
      },
      {
        name: "Test For Browser Cache Weakness",
        subQuestions: [
          { keyword: "Test Cache-Control for Sensitive Resources" },
          { keyword: "Test for Client-Side Cache Manipulation" },
        ],
      },
      {
        name: "Test For Weak Password Policy",
        subQuestions: [{ keyword: "Attempt to Set a Weak Password" }],
      },
      {
        name: "Testing For Weak Security Questions",
        subQuestions: [
          { keyword: "Check for the Complexity of the Security Questions" },
        ],
      },
      {
        name: "Test For Weak MFA (Multi-Factor Authentication)",
        subQuestions: [
          { keyword: "Check for the Complexity of the Security Questions" },
        ],
      },
      {
        name: "Test For Weak MFA (Multi-Factor Authentication)",
        subQuestions: [
          { keyword: "Try to Bypass Multi-Factor Authentication (MFA)" },
        ],
      },
      {
        name: "Test For Weak OTP (One-Time Password) Implementation",
        subQuestions: [{ keyword: "Try to bypass OTP" }],
      },
      {
        name: "Test For Weak Password Reset Function",
        subQuestions: [{ keyword: "Check the Password Reset Process" }],
      },
      {
        name: "Test For Weak Password Change Function",
        subQuestions: [{ keyword: "Ensure Secure Password Change procedure" }],
      },
      {
        name: "Test For Weak Authentication in an Alternative Channel",
        subQuestions: [
          {
            keyword:
              "Test the Authentication Across Different Platforms and Locations",
          },
        ],
      },
      {
        name: "Test OAuth Misconfigurations",
        subQuestions: [
          { keyword: "Flawed redirect_uri Validation" },
          { keyword: "Leaking Authorization Codes and Access Tokens" },
          { keyword: "Flawed CSRF Protection" },
          { keyword: "Impersonate the Resource Owner" },
          { keyword: "Flawed Scope Validation" },
        ],
      },
      {
        name: "Test SAML Misconfigurations",
        subQuestions: [
          { keyword: "Test for Message Expiration" },
          { keyword: "Test for Message Replay" },
          { keyword: "Check SAML Tampering" },
        ],
      },
    ],
  },

  {
    name: "Testing5",
    question: "AUTHORIZATION",
    subSections: [
      {
        name: "Testing Directory Traversal/File Include",
        subQuestions: [
          { keyword: "Locate Potential Path Traversal Injection Points" },
          { keyword: "Test for Local File Inclusion (LFI)" },
          { keyword: "Test for Remote File Inclusion (RFI)" },
          { keyword: "Test Traversal on URL and cookie parameters" },
        ],
      },
      {
        name: "Testing Traversal with Encoding",
        subQuestions: [{ keyword: "Test Traversal with Various Encodings" }],
      },
      {
        name: "Testing Traversal with Different OS Schemes",
        subQuestions: [
          { keyword: "Test Traversal with Unix, Windows, and Mac schemes" },
        ],
      },
      {
        name: "Test Authorization Schema Bypass",
        subQuestions: [
          {
            keyword:
              "Test for Horizontal and Vertical Authorization Schema Bypass",
          },
          { keyword: "Test Override the Target with Custom Headers" },
        ],
      },
      {
        name: "Test For Privilege Escalation",
        subQuestions: [
          {
            keyword:
              "Identify Functionalities That Could be Used for Bypassing the Role Schema",
          },
          { keyword: "Test for Parameter Tampering Manipulations" },
        ],
      },
      {
        name: "Test for Insecure Direct Object Reference (IDOR)",
        subQuestions: [
          {
            keyword: "Identify Guessable ID values and Manipulate Their Values",
          },
          { keyword: "Test for Parameter Pollution" },
          {
            keyword:
              "Perform Tests by Modifying Case, Words, Methods, and Adding Extensions",
          },
          { keyword: "Test with Old API versions" },
          {
            keyword: "Test by Wrapping the ID with an Array or a JSON Object",
          },
        ],
      },
    ],
  },
  {
    name: "Testing6",
    question: "SESSION MANAGEMENT",
    subSections: [
      {
        name: "Test For Session Management Schema",
        subQuestions: [
          {
            keyword:
              "Ensure that Cookies Can’t be Forced Over an Unencrypted Channel",
          },
          { keyword: "Ensure that HTTPOnly Flag is Enabled" },
          { keyword: "Check for Expiration" },
          { keyword: "Check for Guessable Session Identifiers" },
          { keyword: "Try Decoding Cookies and Manipulating their Values" },
        ],
      },
      {
        name: "Test for JWT Misconfigurations",
        subQuestions: [
          { keyword: "Data Tampering without Signature Alteration" },
          { keyword: "NONE as Algorithm" },
          { keyword: "Asymmetric to Symmetric" },
          { keyword: "New Public Key" },
          { keyword: "JWKS Spoofing" },
          { keyword: "KID - Reveal Key" },
          { keyword: "KID - Path Traversal" },
          { keyword: "KID - SQLI" },
          { keyword: "KID - RCE" },
          { keyword: "Cross Service Relay" },
          { keyword: "JWK Set URL" },
          { keyword: "Testing X.509 Certificate Chain" },
          { keyword: "JTI (JWT ID)" },
          { keyword: "Weak Key Set" },
        ],
      },
      {
        name: "Test For Session Fixation",
        subQuestions: [
          {
            keyword:
              "Ensure New Cookies are Issued Upon Successful Authentication",
          },
          { keyword: "Test Session Fixation Delivery" },
        ],
      },
      {
        name: "Test For Exposed Session Variables",
        subQuestions: [
          { keyword: "Test for Encryption and GET/POST Exposures" },
        ],
      },
      {
        name: "Test For Cross-Site Request Forgery (CSRF)",
        subQuestions: [
          {
            keyword: "If a CSRF token is Identified, Check if it is Validated",
          },
          { keyword: "Method Manipulation" },
          { keyword: "Form Manipulation" },
        ],
      },
      {
        name: "Test For Logout Functionality",
        subQuestions: [
          { keyword: "Check the Logout Function Across Different Pages" },
        ],
      },
      {
        name: "Test For Session Timeout",
        subQuestions: [{ keyword: "Verify Session Timeout" }],
      },
      {
        name: "Test For Session Puzzling",
        subQuestions: [
          {
            keyword:
              "Identify all Session Related Variables and Try to Break Their Logical Flow",
          },
        ],
      },
    ],
  },

  {
    name: "Testing8",
    question: "ERROR HANDLING",
    subSections: [
      {
        name: "Test For Improper Error Handling",
        subQuestions: [
          { keyword: "Analyze Different Outputs" },
          { keyword: "Look for Common Error Handling Flaws" },
          { keyword: "Test Error Handling by Making All Possible Errors" },
          {
            keyword:
              "Inspect Stack-Trace Errors for Potential Information Leakage",
          },
        ],
      },
    ],
  },

  {
    name: "Testing9",
    question: "CRYPTOGRAPHY",
    subSections: [
      {
        name: "Test for Weak Transport Layer Security",
        subQuestions: [
          { keyword: "Look for Weak Protocols" },
          { keyword: "Look for Weak Cipher Suites" },
          { keyword: "Certificate Strength" },
        ],
      },
      {
        name: "Weak Data Encryption",
        subQuestions: [{ keyword: "Check for Weak Algorithms Usage" }],
      },
      {
        name: "Test for Padding Oracle",
        subQuestions: [
          { keyword: "Identify Potential Padding Oracle" },
          { keyword: "Verify the Application Response to Manipulation" },
        ],
      },
    ],
  },

  {
    name: "Testing10",
    question: "BUSINESS LOGIC",
    subSections: [
      {
        name: "Test For Business Logic",
        subQuestions: [
          { keyword: "Identify the Application's Logic" },
          { keyword: "Test Numerical Values" },
          { keyword: "Test for Parameter Tampering" },
        ],
      },
      {
        name: "Test For Function Call Limits",
        subQuestions: [
          { keyword: "Review the Documentation" },
          { keyword: "Abuse Lack of Call Limits" },
        ],
      },
      {
        name: "Test For Payment Functionality",
        subQuestions: [
          { keyword: "Examine Different Payment Gateway Integration Methods" },
          { keyword: "Check for Quantity" },
        ],
      },
    ],
  },

  {
    name: "Testing11",
    question: "CLIENT SIDE",
    subSections: [
      {
        name: "Test For DOM Based Cross Site Scripting",
        subQuestions: [
          { keyword: "Identify DOM sinks" },
          { keyword: "Build Payload for the Identified DOM Sink Type" },
        ],
      },
      {
        name: "Test For URL Redirect",
        subQuestions: [
          { keyword: "Test for URL redirection on Common Parameters" },
          { keyword: "Use a Payload list for URL Redirection" },
          { keyword: "Test for URL Redirection with Whitelisted Strings" },
          {
            keyword:
              " If a Related Subdomain can be Used by an Attacker, Attempt to Redirect to the Compromised Subdomain",
          },
        ],
      },
      {
        name: "Test For Cross-Origin Resource Sharing (CORS)",
        subQuestions: [
          { keyword: "Look for 'Access-Control-Allow-Origin' in the Response" },
        ],
      },
      {
        name: "Test For Clickjacking",
        subQuestions: [
          { keyword: "Test X-Frame-Options header" },
          {
            keyword: "Exploit with iframe HTML Code for Proof of Concept (POC)",
          },
        ],
      },
    ],
  },
  // Add more main questions here...
];
