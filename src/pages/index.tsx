import { dehydrate, QueryClient } from '@tanstack/react-query';
import DefaultSEO from 'components/DefaultSEO';
import RenderCMSSections from 'src/components/RenderCMSSections';
import { cmsService } from 'src/service/cmsService';

export async function getStaticProps({ locale }: { locale: string }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['cmsContent', locale], () =>
    cmsService({
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
    }).then(res => res.data)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <>
      <DefaultSEO />
      <RenderCMSSections />
    </>
  );
}
