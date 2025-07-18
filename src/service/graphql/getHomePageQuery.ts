import { GetStaticPropsContext } from 'next';

export const GET_LANDING_PAGE_QUERY = ({locale}: GetStaticPropsContext) => `
  query MyQuery {
    landingPage(locale: ${locale}) {
      pageContent {
        componentName: __typename
        ... on SeoRecord {
          id
          title
          description
          image {
            url
          }
          websiteUrl
          keywords
          author
          siteName
          favicon {
            url
          }
        }
        ... on HeaderBlockRecord {
          id
          menu {
            items {
              id
              linkName
              href
            }
          }
          language {
            title
            options {
              id
              linkName
              href
              icon {
                url
              }
            }
          }
          themeOptions {
            title
            theme {
              id
              linkName
              href
              icon {
                url
              }
            }
          }
          resumeLabel {
            linkName
            href
          }
        }
        ... on HeroSectionBlockRecord {
          id
          avatar {
            url
          }
          jobTitle
          highlightRotatingTexts {
            id
            text
          }
          resumeLabel {
            id
            linkName
            href
          }
        }
        ... on SkillsSectionBlockRecord {
          id
          title
          description
          skills {
            id
            linkName
            href
            icon {
              url
            }
          }
        }
        ... on ProjectsSectionBlockRecord {
          id
          title
          description
          projects {
            id
            projectTitle
            projectDescription
            modalButtonLabel
            projectGallery {
              id
              url
            }
            appliedSolutions {
              title
              solution {
                id
                solution
              }
            }
            challenges {
              title
              challenge {
                id
                solution
              }
            }
            skills {
              title
              skill {
                id
                linkName
                href
                icon {
                  url
                }
              }
            }
            projectLinks {
              ... on LinkWithIconRecord {
                id
                linkName
                href
                icon {
                  url
                }
              }
            }
          }
        }
        ... on AboutMeSectionBlockRecord {
          id
          title
          socialLink {
            id
            linkName
            href
            icon {
              url
            }
          }
          description {
            value
          }
        }
        ... on ExperienceSectionBlockRecord {
          id
          title
          description
          experienceContent {
            experiencies {
              id
              companyName
              roleArea
              period
              jobDescription
              companyLogo {
                url
              }
            }
          }
        }
        ... on ContactSectionBlockRecord {
          id
          title
          description
          socialLink {
            id
            linkName
            icon {
              url
            }
            dropdown {
              id
              text
              href
              iscopy
              icon {
                url
              }
            }
          }
        }
        ... on FooterBlockRecord {
          id
          copyrighttext
        }
      }
    }
  }

`;