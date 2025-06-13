import DefaultSEO from 'components/DefaultSEO';
import { CMSSectionRender } from 'src/components/CMSSectionRender';
import CMSProvider from 'src/provider/CMSProvider';
import { cmsService } from 'src/service/cmsService';
import { HomeProps } from 'src/types/cmsContent.type';

export async function getStaticProps({ locale }: { locale: string }) {
  const year = new Date().getFullYear();

  const  {data: cmsContent} = await cmsService({
    query:`
      query MyQuery {
        landingPage(locale: ${locale}) {
          pageContent {
            componentName: __typename
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
              highlightFixedText
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
                  demonstration {
                    id
                    linkName
                    href
                    icon {
                      url
                    }
                  }
                  sourceCode {
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
                href
                icon {
                  url
                }
                dropdown {
                  id
                  text
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
    `
  });

  return {
    props: {
      cmsContent, 
      year
    }
  };
};

export default function Home({ cmsContent, year }: HomeProps) {
  return (
    <>
      <DefaultSEO />
      <CMSProvider cmsContent={cmsContent} year={year}>
        <CMSSectionRender pageName="landingPage" year={year} />
      </CMSProvider>
    </>
  );
}
