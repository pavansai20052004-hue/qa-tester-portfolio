import './App.css'

const profile = {
  name: 'GJV Pavan Sai',
  role: 'QA Engineer | Manual Tester | Software Test Engineer Trainee',
  summary:
    'QA-focused software engineer with hands-on practice in manual testing, test case design, bug reporting, RTM, test summary reporting, SDLC/STLC, Agile delivery, and JIRA basics. My development background in Java, Python, JavaScript, SQL, REST APIs, and MERN applications helps me test UI, functional, API, and database flows with stronger product context.',
  phone: '+91 9502589529',
  email: 'pavansai20052004@gmail.com',
  location: 'Hyderabad, India',
  resume: '/GJV_Pavan_Sai_QA_Resume.pdf',
  github: 'https://github.com/pavansai20052004-hue',
  linkedin: 'https://www.linkedin.com/in/gjv44',
}

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const proofStrip = [
  {
    title: 'SDLC & STLC',
    copy: 'End-to-end understanding of the QA lifecycle and release readiness.',
    icon: 'compass',
  },
  {
    title: 'Test Case Design',
    copy: 'Positive, negative, boundary, and equivalence-driven coverage.',
    icon: 'document',
  },
  {
    title: 'Bug Reporting',
    copy: 'Clear defects with severity, priority, reproduction steps, and evidence.',
    icon: 'bug',
  },
  {
    title: 'Agile & JIRA Basics',
    copy: 'Comfortable with sprint workflows, bug logging, and regression cycles.',
    icon: 'spark',
  },
  {
    title: 'Web & App Testing',
    copy: 'Functional, UI, API, and role-based testing across real user journeys.',
    icon: 'window',
  },
]

const aboutCards = [
  {
    title: 'Quality Focused',
    copy: 'I approach testing as a product quality discipline, not only a defect hunt.',
    icon: 'shield',
  },
  {
    title: 'Analytical Mindset',
    copy: 'I break features into scenarios, edge cases, validation rules, and data paths.',
    icon: 'chart',
  },
  {
    title: 'API + UI Coverage',
    copy: 'My development exposure helps me validate behavior across interface and backend layers.',
    icon: 'layers',
  },
  {
    title: 'Continuous Learner',
    copy: 'I keep improving through project-based practice, documentation, and better test evidence.',
    icon: 'rocket',
  },
]

const projectCards = [
  {
    title: 'Swag Labs E-commerce Application Testing',
    stack: ['Manual Testing', 'Functional Testing', 'Excel', 'JIRA Basics'],
    modules: ['Login', 'Products', 'Cart', 'Checkout', 'Logout'],
    highlights: [
      'Performed manual testing across the full purchase journey on a demo e-commerce application.',
      'Designed 20+ test cases covering positive, negative, exploratory, regression, BVA, and equivalence scenarios.',
      'Prepared execution evidence including RTM, bug reports, and a test summary report for portfolio review.',
    ],
    outcome:
      'Reported a UI state defect where the Remove button remained visible after Reset App State cleared the cart count.',
    footerLabel: 'Coverage Signal',
    footerValue: '20+ cases',
  },
  {
    title: 'RentEase Rental Management Platform Testing',
    stack: ['Functional Testing', 'UI Testing', 'API Testing', 'Postman', 'MongoDB'],
    modules: [
      'Authentication',
      'Product Listing',
      'Rental Cart',
      'Rental Orders',
      'Role-Based Dashboard',
    ],
    highlights: [
      'Created functional and negative scenarios for login, search, filters, cart flow, and order processing.',
      'Validated REST API requests, responses, status codes, and access control behavior with Postman and app flows.',
      'Checked JWT authentication and RBAC rules to confirm users could access only authorized actions.',
    ],
    outcome:
      'Turned full-stack product behavior into a QA validation flow spanning UI, API, and authorization checks.',
    footerLabel: 'Testing Focus',
    footerValue: 'UI + API',
  },
  {
    title: 'HunarHub Skill Marketplace Testing',
    stack: ['Manual Testing', 'Role-Based Testing', 'API Testing', 'Bug Reporting'],
    modules: [
      'Admin Workflow',
      'Entrepreneur Workflow',
      'Customer Workflow',
      'Approvals',
      'Request Management',
    ],
    highlights: [
      'Designed role-based test cases for valid login, invalid login, unauthorized access, CRUD operations, and errors.',
      'Tested login, service listing, approval, and request management across multiple user roles.',
      'Documented expected vs actual results with severity and priority for API-driven workflow defects.',
    ],
    outcome:
      'Built stronger QA evidence for marketplace workflows where permissions and state handling matter.',
    footerLabel: 'Risk Lens',
    footerValue: 'RBAC heavy',
  },
]

const toolkitGroups = [
  {
    title: 'Manual Testing',
    icon: 'scope',
    items: [
      'Functional Testing',
      'Smoke & Sanity',
      'Regression & Retesting',
      'Exploratory Testing',
      'Positive & Negative Scenarios',
      'Boundary Value Analysis',
      'Equivalence Partitioning',
    ],
  },
  {
    title: 'QA Documentation',
    icon: 'document',
    items: [
      'Test Scenarios',
      'Test Cases',
      'Bug Reports',
      'Severity & Priority',
      'Requirement Traceability Matrix',
      'Test Plan & Test Data',
      'Test Summary Report',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'toolbox',
    items: [
      'JIRA Basics',
      'Postman',
      'Excel',
      'Chrome DevTools',
      'Git & GitHub',
      'VS Code',
    ],
  },
  {
    title: 'Programming & Databases',
    icon: 'code',
    items: [
      'Java',
      'Python',
      'JavaScript',
      'SQL',
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'SQLite',
    ],
  },
]

const experienceTimeline = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Unified Mentor',
    period: 'Jan 2026 - Apr 2026',
    body: [
      'Developed 15+ REST APIs for MERN applications using Node.js, Express.js, MongoDB, JWT authentication, RBAC, and input validation.',
      'Gained QA-relevant exposure to API behavior, validation rules, role-based access, and user flow consistency while building full-stack features.',
    ],
  },
  {
    role: 'DevOps Intern',
    company: 'Skilified Mentor',
    period: 'Mar 2026 - Apr 2026',
    body: [
      'Automated Java compile, test, and packaging workflows using Apache Maven, Git, and CI/CD practices.',
      'Strengthened my understanding of release reliability, deployment validation, and the quality checks that support stable delivery.',
    ],
  },
  {
    role: 'Data Science and Analytics Intern',
    company: 'Zidio Development',
    period: 'May 2026 - Present',
    body: [
      'Built Python-based workflows with Pandas and NumPy for data cleaning, transformation, and validation.',
      'Expanded my QA perspective around data consistency, correctness checks, and trust in downstream reporting.',
    ],
  },
]

const certifications = [
  'Full-Stack Web Development - Unified Mentor',
  'Generative AI - Infosys Springboard',
  'Programming and Problem Solving - IBM SkillsBuild',
]

const contactMethods = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: 'phone',
  },
  { label: 'Location', value: profile.location, href: null, icon: 'pin' },
  { label: 'GitHub', value: 'pavansai20052004-hue', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gjv44', href: profile.linkedin, icon: 'linkedin' },
]

function Icon({ name }) {
  const icons = {
    shield: (
      <path d="M12 2.5 4.5 5.6v6.2c0 4.7 3.1 8.9 7.5 9.7 4.4-.8 7.5-5 7.5-9.7V5.6L12 2.5Zm3.5 7.2-4.2 4.6-2.8-2.8" />
    ),
    document: (
      <>
        <path d="M8 3.5h6l4 4v13H8z" />
        <path d="M14 3.5v4h4" />
        <path d="M10.5 12.25h5" />
        <path d="M10.5 15.5h5" />
        <path d="M10.5 18.75h3.25" />
      </>
    ),
    bug: (
      <>
        <path d="M12 7.5c2 0 3.5 1.6 3.5 3.6v4.3c0 2-1.6 3.6-3.5 3.6s-3.5-1.6-3.5-3.6v-4.3c0-2 1.6-3.6 3.5-3.6Z" />
        <path d="M9.5 7V5.5a2.5 2.5 0 0 1 5 0V7" />
        <path d="M6.5 10h11" />
        <path d="m6.5 7.75 2 1.5" />
        <path d="m17.5 7.75-2 1.5" />
        <path d="m6.5 13 2 1" />
        <path d="m17.5 13-2 1" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3.5 1.8 4.7L18.5 10l-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.8L12 3.5Z" />
        <path d="m18.5 4.5.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
      </>
    ),
    window: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="M3.5 8.5h17" />
        <path d="M7 6.75h.01" />
        <path d="M10 6.75h.01" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    chart: (
      <>
        <path d="M5 18.5h14" />
        <path d="M7.5 15v-3.5" />
        <path d="M12 15V8.5" />
        <path d="M16.5 15v-6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
        <path d="m4 12 8 4.5 8-4.5" />
        <path d="m4 15.5 8 4.5 8-4.5" />
      </>
    ),
    rocket: (
      <>
        <path d="M14.5 4.5c2.1.8 3.5 2.9 3.5 5.2 0 4-4.8 7.5-9.5 8.8l1.5-4.2-3.3-3.3 4.2-1.5c1.3-4.7 4.8-9.5 8.8-9.5Z" />
        <circle cx="14.5" cy="9.5" r="1.25" />
      </>
    ),
    scope: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10" />
        <path d="M7 12h10" />
      </>
    ),
    toolbox: (
      <>
        <rect x="4" y="7.5" width="16" height="10" rx="2" />
        <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
        <path d="M4 11.5h16" />
      </>
    ),
    code: (
      <>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
        <path d="m13.5 6-3 12" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m4.5 7 7.5 5 7.5-5" />
      </>
    ),
    phone: (
      <>
        <path d="M7.5 4.5h3l1 3.4-1.5 1.9a13.6 13.6 0 0 0 4.2 4.2l1.9-1.5 3.4 1v3c0 1.1-.9 2-2 2h-.8C9.6 18.5 5.5 14.4 5.5 9.3v-.8c0-1.1.9-2 2-2Z" />
      </>
    ),
    pin: (
      <>
        <path d="M12 20c3.5-4.1 5.2-7.2 5.2-9.4a5.2 5.2 0 1 0-10.4 0c0 2.2 1.7 5.3 5.2 9.4Z" />
        <circle cx="12" cy="10.75" r="1.9" />
      </>
    ),
    github: (
      <path d="M12 3.5A8.5 8.5 0 0 0 9.3 20c.4.1.6-.2.6-.5v-1.9c-2.3.5-2.8-1-2.8-1-.4-.9-1-1.2-1-1.2-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-.9.6-1.1-1.9-.2-3.9-.9-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.4.9a8.2 8.2 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.2.6.7.6 1.5v2.2c0 .3.2.6.6.5A8.5 8.5 0 0 0 12 3.5Z" />
    ),
    linkedin: (
      <>
        <path d="M6.6 8.6v9.1" />
        <path d="M6.6 5.9h.01" />
        <path d="M11 17.7v-5.1c0-1.4 1.1-2.5 2.5-2.5S16 11.2 16 12.6v5.1" />
        <path d="M11 12.5v-3.9" />
        <rect x="4" y="4" width="16" height="16" rx="3" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}

function SectionHeading({ title, description }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Icon name="shield" />
          </span>
          <span>{profile.name}</span>
        </a>

        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section section-card" id="top">
          <div className="hero-copy">
            <p className="hero-role">{profile.role}</p>
            <h1>{profile.name}</h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Test Projects
              </a>
              <a className="button button-secondary" href={profile.resume} download>
                Download Resume
              </a>
            </div>

            <dl className="hero-details">
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{profile.email}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Manual, UI, API, and role-based testing</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="QA dashboard preview">
            <article className="qa-board board-main">
              <div className="board-top">
                <span className="board-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="board-title">Test Execution</span>
              </div>

              <div className="board-table">
                <div className="board-row board-head">
                  <span>Test Case</span>
                  <span>Module</span>
                  <span>Priority</span>
                  <span>Status</span>
                </div>
                <div className="board-row">
                  <span>TC_001</span>
                  <span>Login</span>
                  <span>High</span>
                  <span className="status-pill pass">PASS</span>
                </div>
                <div className="board-row">
                  <span>TC_006</span>
                  <span>Product Listing</span>
                  <span>Medium</span>
                  <span className="status-pill pass">PASS</span>
                </div>
                <div className="board-row">
                  <span>TC_011</span>
                  <span>Cart Flow</span>
                  <span>Medium</span>
                  <span className="status-pill pass">PASS</span>
                </div>
                <div className="board-row">
                  <span>TC_015</span>
                  <span>Checkout</span>
                  <span>High</span>
                  <span className="status-pill pass">PASS</span>
                </div>
                <div className="board-row">
                  <span>TC_020</span>
                  <span>Reset State</span>
                  <span>Medium</span>
                  <span className="status-pill fail">FAIL</span>
                </div>
              </div>
            </article>

            <article className="qa-float defect-card">
              <div className="mini-heading">
                <Icon name="bug" />
                <span>Defect Tracker</span>
              </div>
              <dl>
                <div>
                  <dt>Summary</dt>
                  <dd>Remove button stayed visible after cart reset.</dd>
                </div>
                <div>
                  <dt>Severity</dt>
                  <dd>Medium</dd>
                </div>
                <div>
                  <dt>Logged In</dt>
                  <dd>JIRA-ready format</dd>
                </div>
              </dl>
            </article>

            <article className="qa-float rtm-card">
              <div className="mini-heading">
                <Icon name="document" />
                <span>RTM Snapshot</span>
              </div>
              <div className="mini-grid">
                <span>REQ-001</span>
                <span>User Login</span>
                <span>TC_001</span>
                <span>REQ-002</span>
                <span>Checkout Flow</span>
                <span>TC_015</span>
                <span>REQ-003</span>
                <span>Reset State</span>
                <span>TC_020</span>
              </div>
            </article>

            <article className="qa-float api-card">
              <div className="mini-heading">
                <Icon name="layers" />
                <span>API Check</span>
              </div>
              <pre>{`{\n  "status": 200,\n  "auth": "jwt-ok",\n  "role": "authorized",\n  "result": "validated"\n}`}</pre>
            </article>
          </div>
        </section>

        <section className="proof-strip" aria-label="Core QA strengths">
          {proofStrip.map((item) => (
            <article key={item.title} className="proof-card">
              <Icon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section-card about-section" id="about">
          <div className="about-copy">
            <SectionHeading
              title="About Me"
              description="I enjoy testing workflows the way real users and real edge cases experience them. My development exposure makes it easier to understand validation rules, API behavior, and role-based logic while keeping the final goal simple: deliver software that feels dependable."
            />
          </div>

          <div className="about-grid">
            {aboutCards.map((card) => (
              <article key={card.title} className="about-card">
                <div className="icon-badge">
                  <Icon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card projects-section" id="projects">
          <SectionHeading
            title="Projects"
            description="Portfolio-style QA projects where I practiced structured test design, role-based validation, API checks, defect reporting, and traceability."
          />

          <div className="project-grid">
            {projectCards.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-head">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="tag-row">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-emphasis">
                    <span>{project.footerValue}</span>
                    <small>{project.footerLabel}</small>
                  </div>
                </div>

                <div className="project-content">
                  <div>
                    <h4>Modules Covered</h4>
                    <ul>
                      {project.modules.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>QA Highlights</h4>
                    <ul>
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="project-outcome">{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card skills-section" id="skills">
          <SectionHeading
            title="Testing Toolkit"
            description="The process, documentation habits, tools, and technical foundations I bring into web application testing."
          />

          <div className="toolkit-grid">
            {toolkitGroups.map((group) => (
              <article key={group.title} className="toolkit-card">
                <div className="toolkit-head">
                  <div className="icon-badge">
                    <Icon name={group.icon} />
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-layout" id="experience">
          <div className="section-card experience-panel">
            <SectionHeading
              title="Experience"
              description="Hands-on exposure that sharpened my understanding of APIs, validation rules, build reliability, and data correctness from a QA perspective."
            />

            <div className="timeline">
              {experienceTimeline.map((item) => (
                <article key={`${item.role}-${item.company}`} className="timeline-item">
                  <span className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-header">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <ul>
                    {item.body.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="side-stack">
            <section className="section-card side-card">
              <SectionHeading
                title="Education"
                description="B.Tech in Data Science - Holy Mary Institute of Technology & Science"
              />
              <p className="education-meta">2022 - 2026</p>
              <p className="education-meta">CGPA: 7.84 / 10</p>
            </section>

            <section className="section-card side-card">
              <SectionHeading
                title="Certifications"
                description="Training credentials that support my QA and software foundations."
              />
              <ul className="simple-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section className="section-card contact-section" id="contact">
          <div className="contact-grid">
            <div>
              <SectionHeading
                title="Contact"
                description="Open to QA testing opportunities where detail, ownership, and steady validation work matter."
              />

              <div className="contact-list">
                {contactMethods.map((method) => {
                  const content = (
                    <>
                      <div className="icon-badge">
                        <Icon name={method.icon} />
                      </div>
                      <div>
                        <span>{method.label}</span>
                        <strong>{method.value}</strong>
                      </div>
                    </>
                  )

                  return method.href ? (
                    <a
                      key={method.label}
                      className="contact-item"
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={method.label} className="contact-item">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            <aside className="cta-panel">
              <h3>Let&apos;s Build Quality Together</h3>
              <p>
                I&apos;m looking for QA roles where I can contribute through structured
                testing, clearer defect communication, and dependable release support.
              </p>
              <div className="cta-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  Start a Conversation
                </a>
                <a className="button button-secondary" href={profile.resume} download>
                  Resume PDF
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resume} download>
            Resume
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
