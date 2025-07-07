import { dehydrate, QueryClient } from '@tanstack/react-query';
import DefaultSEO from 'components/DefaultSEO';
import { SEORecord, SEORecordProps } from 'src/components/DefaultSEO/defaultSEO.type';
import RenderCMSSections from 'src/components/RenderCMSSections';
import { cmsService } from 'src/service/cmsService';

export async function getStaticProps({ locale }: { locale: string }) {
  const queryClient = new QueryClient();
  const year = new Date().getFullYear();

  const { data: seoRecord } = await cmsService({
    query: `
      query MyQuery {
        landingPage(locale: ${locale}) {
          pageContent {
            componentName: __typename
            ... on SeoRecord {
              id
              title
              description
              image { url }
              websiteUrl
              keywords
              author
              siteName
              favicon { url }
            }
          }
        }
      }
    `
  });

  const pageContent = seoRecord?.landingPage?.pageContent ?? [];

  const seo = pageContent.find(
    (block: SEORecord) => block.componentName === 'SeoRecord'
  );


  await queryClient.prefetchQuery(['cmsContent', locale], () =>
    cmsService({
      query:`
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
    }).then(res => ({
      ...res.data,
      landingPage: {
        ...res.data.landingPage,
        pageContent: res.data.landingPage.pageContent.map((item: { componentName: string; }) => 
          item.componentName === 'FooterBlockRecord' 
            ? { ...item, year } as const
            : item
        )
      }
    }))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      seo,
    },
  };
};

export default function Home({ seo }: SEORecordProps) {
  return (
    <>
      <DefaultSEO seo={seo} />
      <RenderCMSSections />
    </>
  );
}
