import DefaultSEO from 'components/DefaultSEO';
import { GetStaticPropsContext } from 'next';
import RenderCMSSections from 'src/components/RenderCMSSections';
import { CMSProvider } from 'src/provider/CMSContext';
import { PageContentBlock } from 'src/screens/cmsSections.type';
import { cmsService } from 'src/service/cmsService';

interface HomeProps {
  cmsData: {
    landingPage: {
      pageContent: PageContentBlock[];
    };
  }
  locale: string;
}


export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const year = new Date().getFullYear();

  try {
    const response = await cmsService({
      query: `
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
      `
    });

    const cmsData = {
      ...response.data,
      landingPage: {
        ...response.data.landingPage,
        pageContent: response.data.landingPage.pageContent.map((item: { componentName: string; }) => 
          item.componentName === 'FooterBlockRecord' 
            ? { ...item, year } as const
            : item
        )
      }
    };

    return {
      props: {
        cmsData,
        locale,
      },
    };
  } catch (error) {
    console.error('Erro ao carregar dados do CMS:', error);
    return {
      props: {
        cmsData: { landingPage: { pageContent: [] } },
        locale,
      },
    };
  }
};

export default function Home({ cmsData, locale }: HomeProps) {

  return (
    <CMSProvider data={cmsData} locale={locale}>
      <DefaultSEO />
      <RenderCMSSections />
    </CMSProvider>
  );
}
