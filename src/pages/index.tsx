import DefaultSEO from 'components/DefaultSEO';
import { CMSSectionRender } from 'src/components/CMSSectionRender';
import CMSProvider from 'src/provider/CMSProvider';
import { cmsService } from 'src/service/cmsService';
import { HomeProps } from 'src/types/cmsContent.type';

export async function getStaticProps() {
  const year = new Date().getFullYear();

  const  {data: cmsContent} = await cmsService({
    query:`
      query MyQuery {
        landingPage(locale: pt_BR) {
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
}

export default function Home<T>({cmsContent, year}: HomeProps<T>) {
  return (
    <>
      <DefaultSEO />
      <CMSProvider cmsContent={cmsContent} year={year}>
        <CMSSectionRender pageName="landingPage" year={year} />
      </CMSProvider>
    </>
  );
}
